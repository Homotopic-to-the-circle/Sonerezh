# Sonerezh

Table de son du MJ, façon Rolify, pour ordinateur en plein écran : musiques de fond, ambiances superposées et sons uniques, lus **directement dans un dossier de ton ordinateur** (rien n'est copié ni envoyé).

**App : https://homotopic-to-the-circle.github.io/Sonerezh/**

## Installer

1. Ouvre l'adresse dans **Chromium** (ou Chrome, Edge, Brave ; Firefox ne sait pas lire un dossier local).
2. Icône d'installation dans la barre d'adresse → **Installer** : Sonerezh s'ouvre ensuite dans sa propre fenêtre, sans barre d'onglets. ⛶ passe en plein écran.
3. **Choisir le dossier** : celui où sont tes sons (le dossier kDrive synchronisé marche aussi). Les sous-dossiers sont lus.
4. À chaque lancement, Chromium peut redemander l'accès au dossier : un toucher sur « Ouvrir … ». Sur l'app installée, coche « Autoriser à chaque visite » quand il le propose.

Formats : mp3, wav, ogg, opus, flac, m4a/aac (selon Chromium), webm.

## Ranger ses sons

☰ **Bibliothèque** → onglet **Non classés** : touche les lignes à ranger, puis en bas *Ranger dans* **Fond / Ambiance / Unique** → catégorie (ou **＋ Nouvelle catégorie**). ▶ écoute un son, ✎ le renomme, change sa catégorie ou ajuste son volume.

- **Fond** : une seule musique à la fois. Toucher une piste = elle tourne en boucle, avec un fondu enchaîné depuis la précédente. ⤮ sur une catégorie = enchaîne ses pistes au hasard. La fin d'une piste se fond dans son début : pas de blanc à la boucle.
- **Ambiances** : boucles qui se superposent (pluie + feu de camp + taverne…). Toucher = allumer/éteindre en fondu, curseur = volume de cette ambiance.
- **Uniques** : jouées une fois, superposables. Plusieurs fichiers au même nom suivi d'un numéro (`Épée 1`, `Épée 2`, `Épée 3`) donnent **un seul bouton** qui tire une variante au hasard. Pendant un son unique, fond et ambiances baissent un peu (réglable).

## Volumes égaux

Chaque fichier est mesuré une fois (loudness LUFS, norme radio/streaming) puis ramené au même niveau : un fond trop fort ou un bruitage trop faible n'ont plus besoin d'être retouchés. Ensuite :
- les curseurs **Fond / Ambiances / Uniques** règlent l'équilibre entre sections ;
- ✎ dans la bibliothèque affine un son précis (± 12 dB) ;
- un limiteur en sortie empêche toute saturation.

## Scènes

**＋ Scène** enregistre instantanément ce qui joue (fond, ambiances et leurs volumes). Toucher une scène dans la barre du haut y passe en fondu. ⚙ Réglages → Scènes : renommer, réordonner, ⟳ remplacer par ce qui joue, supprimer.

**Silence** coupe tout en fondu (3 s par défaut).

## Sauvegarde

Catégories, noms, scènes et réglages restent dans le navigateur. ⚙ → **Exporter** de temps en temps (fichier `.json`, à garder par exemple dans ton dossier de sons) ; **Importer** le restaure. Les sons sont reconnus par leur chemin dans le dossier : si tu renommes ou déplaces un fichier, il revient dans « Non classés ».

## Conseil Bluetooth

Le Bluetooth ajoute un léger décalage (~0,2 s) aux sons uniques : touche le bouton un poil avant l'action.
