# Plan — Tâches 3, 4 et 5

## Contexte
Trois améliorations de l'InventoryManagementDashboard :
- **Tâche 3** : Autocomplétion du nom de produit à la création, avec préremplissage des champs
- **Tâche 4** : Filtrage de la liste des produits par état et date
- **Tâche 5** : Historique global amélioré (filtres, catégories, réutilisé dans Inventory et Cleaning)

---

## Tâche 3 — Autocomplétion (ProductForm.jsx)

### Approche
- Importer `useProducts` dans `ProductForm.jsx` pour récupérer les produits existants
- Ajouter un `<datalist>` lié au champ nom du produit
- Sur `onChange`, détecter si la valeur saisie correspond exactement à un produit existant → préremplir `weight`, `unit`, `quantity`, `category`, `price`
- Ne jamais préremplir `expiryDate`

### Fichiers modifiés
- `src/components/ProductForm.jsx` — import `useProducts`, ajout `<datalist>`, logique de préremplissage

---

## Tâche 4 — Filtrage de la liste des produits (ProductList.jsx)

### Approche
- Ajouter des états de filtre dans `ProductList` :
  - `statusFilter` : `'default'` | `'to_handle'` | `'promoted'` | `'donated'` | `'destroyed'` | `'all'`
  - Le mode `'default'` = afficher les `to_handle` + les autres avec décision datant de < 2 semaines
- Ajouter une UI de filtre (select statut)
- Filtrage client-side sur les produits déjà chargés via le listener temps réel

### Fichiers modifiés
- `src/components/ProductList.jsx` — ajout états filtre + UI filtre + logique de filtrage

---

## Tâche 5 — Historique global amélioré

### Vue d'ensemble
Refactoriser `ActivityLog` en composant réutilisable filtrable, et introduire un champ `category` dans les logs pour distinguer les domaines.

### Étape A — Ajouter `category` à `addLog`
- Signature : `addLog(message, type = 'info', user = null, category = 'system')`
- Catégories définies : `'inventory'` | `'cleaning'` | `'tables'` | `'system'`
- Fichier : `src/hooks/useLogs.js`

### Étape B — Ajouter `category` aux appels `addLog` existants
- `src/components/CleaningChecklist.jsx` — tous les `addLog` → `category: 'cleaning'`
- (Les appels dans TableGrid/autres → `category: 'tables'` si existants, sinon `'system'`)

### Étape C — Logger les événements produits/plats
Ajouter des appels `addLog(..., 'inventory')` dans :
- `src/components/ProductForm.jsx` — création produit
- `src/components/ProductList.jsx` — suppression produit
- `src/components/ProductDecisions.jsx` — décision (promotion/don/destruction)
- `src/components/DishForm.jsx` — création plat
- `src/components/DishList.jsx` — suppression plat

### Étape D — Refactoriser `ActivityLog.jsx`
Transformer en composant réutilisable avec props :
```jsx
<ActivityLog defaultCategory={null} />  // null = toutes catégories (dashboard)
<ActivityLog defaultCategory="inventory" />  // InventoryManagementDashboard
<ActivityLog defaultCategory="cleaning" />   // CleaningChecklist
```

**Nouvelles fonctionnalités UI :**
- Filtre catégorie (select) : Tous / Inventaire / Nettoyage / Tables / Système
  - Si `defaultCategory` est passé, le filtre est pré-sélectionné et verrouillé
- Filtre timespan (boutons preset) : 10 min / 1h / 24h / 7j / 30j / Personnalisé
- Mode Personnalisé : deux `<input type="datetime-local">` (début / fin)
- Filtrage client-side sur les logs déjà fetchés

**Changement dans `useLogs.js` :**
- Augmenter la limite de `10` à `500` pour permettre le filtrage client-side
- Garder `orderBy('timestamp', 'desc')`

### Étape E — Intégrer dans InventoryManagementDashboard
- Ajouter un onglet **"Historique"** dans `InventoryManagementDashboard.jsx`
- Rendre `<ActivityLog defaultCategory="inventory" />`

### Étape F — Intégrer dans CleaningChecklist
- Ajouter `<ActivityLog defaultCategory="cleaning" />` en bas de `CleaningChecklist.jsx`

---

## Ordre d'implémentation

1. `useLogs.js` — ajouter `category`, augmenter limite
2. `ActivityLog.jsx` — refactoriser avec filtres
3. `CleaningChecklist.jsx` — ajouter `category: 'cleaning'` aux `addLog` existants
4. `ProductForm.jsx` — logging création + autocomplétion (tâche 3)
5. `ProductList.jsx` — logging suppression + filtrage (tâche 4)
6. `ProductDecisions.jsx` — logging décisions
7. `DishForm.jsx` + `DishList.jsx` — logging création/suppression plats
8. `InventoryManagementDashboard.jsx` — onglet Historique
9. `CleaningChecklist.jsx` — ajout du composant ActivityLog en bas de page

---

## Fichiers critiques

| Fichier | Rôle |
|---|---|
| `src/hooks/useLogs.js` | Ajouter `category`, augmenter limit |
| `src/components/ActivityLog.jsx` | Refactoriser avec filtres |
| `src/components/ProductForm.jsx` | Autocomplétion + log création |
| `src/components/ProductList.jsx` | Filtre statut + log suppression |
| `src/components/ProductDecisions.jsx` | Log décisions |
| `src/components/DishForm.jsx` | Log création plat |
| `src/components/DishList.jsx` | Log suppression plat |
| `src/components/CleaningChecklist.jsx` | Ajouter category + ActivityLog |
| `src/components/InventoryManagementDashboard.jsx` | Onglet Historique |

---

## Vérification

- Créer un produit → événement visible dans ActivityLog du dashboard (catégorie "Inventaire") et dans l'onglet Historique de l'Inventory Dashboard
- Supprimer un produit → idem
- Prendre une décision sur un produit → idem
- Créer/supprimer un plat → idem
- Marquer une tâche de nettoyage → visible dans ActivityLog du dashboard et dans le log en bas de CleaningChecklist (catégorie "Nettoyage"), pas dans l'onglet Historique de l'Inventory
- Filtres timespan : sélectionner "Dernière heure" filtre correctement
- Filtre Personnalisé : saisir un début/fin filtre correctement
- Dans InventoryManagementDashboard, le filtre catégorie est pré-sélectionné sur "Inventaire" et non modifiable
