# Consignes pour Claude — Sonerezh (table de son du MJ)

App servie sur https://homotopic-to-the-circle.github.io/Sonerezh/ (GitHub Pages, branche `main`), utilisée en plein écran tactile dans Chromium avec l'extension Portail (source : `dalmor-ui/portail/`). Pousser directement sur `main` est autorisé par le propriétaire.

Sonerezh est **nuit par défaut** (`<html data-theme-defaut="nuit">`), mais suit le thème commun choisi dans n'importe quelle app (bouton ☾ / ☀ de l'en-tête). Les anciennes variables `--gold*` / `--red*` ont été renommées vers les noms communs (`--accent`, `--accent-hi`, `--line`, `--accent-soft`, `--danger`, `--danger-soft`) : ne pas les réintroduire.

## Thème et couleurs (Dal-Mor UI) — obligatoire

Les couleurs, les polices et le thème jour / nuit viennent du dépôt commun **[dalmor-ui](https://github.com/Homotopic-to-the-circle/dalmor-ui)** (lire son README). Il est chargé dans `<head>` :
`<script src="/dalmor-ui/theme.js"></script>` puis `<link rel="stylesheet" href="/dalmor-ui/theme.css">` — ne pas les retirer, ne pas les déplacer après les styles de l'app.

- **Aucune couleur en dur** (ni dans le CSS, ni dans le HTML généré par le JS) : toujours `var(--bg)`, `var(--card)`, `var(--fg)`, `var(--muted)`, `var(--accent)`, `var(--line)`… Transparence : `color-mix(in srgb, var(--accent) 20%, transparent)`. Ombre : `rgba(var(--ombre), .3)`.
- Les couleurs se changent **dans dalmor-ui**, jamais ici. Le bloc `:root{…}` en haut du CSS n'est qu'un **secours** si dalmor-ui ne charge pas : ne pas y toucher.
- Il faut une variable qui n'existe pas ? L'ajouter dans `dalmor-ui/theme.css` (dans les deux thèmes) et l'utiliser ici avec une valeur de secours : `var(--nouvelle, #valeur)`.
- Le bouton de thème est `<button data-dalmor-theme>Thème</button>` (ou `data-dalmor-theme="ico"`) : géré par theme.js, sans `data-a` / `data-act`.
- Toujours vérifier un changement d'interface **dans les deux thèmes** (jour et nuit). Pour tester : `Dalmor.theme.set('nuit')` dans la console.
- Exceptions assumées : visionneuse d'images plein écran (toujours sombre), pages imprimables, canvas.
