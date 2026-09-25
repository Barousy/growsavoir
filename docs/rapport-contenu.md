# État du contenu — relecture des 132 leçons

Relecture mécanique de `content/lessons/*.json`, faite le 25 septembre 2026 sur
le contenu repris de la version précédente. Le script d'analyse ne juge pas la
pédagogie : il mesure ce qui est vérifiable — un champ manquant, une bonne
réponse absente de ses options, une leçon deux fois plus courte que ses
voisines, un lien qui ne mène nulle part.

---

## Le constat principal

**Une matière est écrite, dix sont des plans de leçon.**

| Matière | Texte rédigé, médiane |
|---|---|
| Langue Arabe | **2 135 caractères** |
| Sciences | 543 |
| Langue Française | 478 |
| Langue Anglaise | 476 |
| Fiqh | 441 |
| Aqîda | 429 |
| Informatique | 420 |
| Sîra | 405 |
| Mathématiques | 401 |
| Histoire de l'Islam | 323 |
| Développement Personnel | 295 |

Le « texte rédigé » compte l'introduction, les sections, le résumé et les points
à retenir — pas les métadonnées, pas les titres de navigation.

**89 leçons sur 132 tiennent en moins de 500 caractères**, soit l'équivalent
d'un SMS long, pour une leçon annoncée à 20 minutes. Voici une leçon entière,
telle qu'elle est publiée :

> **Je me présente et j'écoute** — 12 min
> *Qui suis-je ?* Je dis **mon prénom** et **ce que j'aime** (un jeu, un fruit).
> J'**écoute** les autres sans couper la parole.
> *Écoute active* — 1) Je **regarde**. 2) Je **me tais**. 3) Je **reformule**.
> *Ronde des prénoms* — Chaque élève se présente en **1 phrase**.
> *Récap* — Se présenter + **écouter** = **bien vivre ensemble**.

Ce n'est pas une leçon : c'est l'aide-mémoire de quelqu'un qui sait déjà quoi
dire. Pour un enseignant qui connaît son sujet, c'est utilisable. Pour un parent
ou un enfant qui lit la page seul — le public annoncé — il manque l'essentiel.

Les douze leçons d'arabe, elles, sont de vraies leçons : les 28 lettres avec
leurs noms et leurs points dans un tableau, les quatre formes d'écriture, des
exemples vocalisés. Elles donnent la mesure de ce que les autres devraient être.

---

## Ce qui a été corrigé

Uniquement ce qui se corrige sans réécrire :

| Correction | Nombre |
|---|---|
| Sources internes supprimées (« Programme interne Aqîda N1 » → `example.com`) | 48 |
| URL factice `#` retirée, référence conservée (Ibn Kathîr — *Al-Bidāya*) | 12 |
| Ressources rendues sans lien (« Modèle d'affiche », « Carte muette Arabie ») | 25 |

Les 48 premières renvoyaient à un document interne que personne ne peut
consulter : les afficher sous un titre « Sources » donnait l'apparence d'un
travail sourcé sans la chose. Les références à Ibn Kathîr sont réelles ; c'est
seulement leur lien qui était inventé. Les pages affichent désormais une
référence sans lien comme du texte : mieux vaut pas de lien qu'un lien mort.

Deux tests gardent ces défauts fermés (`tests/contenu.test.mjs`) : plus aucun
lien vers `example.com` ou `#`, et toute bonne réponse de quiz doit figurer
parmi ses options.

---

## Ce qui reste, et qui demande d'écrire

| Constat | Leçons concernées |
|---|---|
| Moins de 500 caractères de texte rédigé | 89 / 132 |
| Une seule question de quiz | 105 / 132 |
| Aucune source, une fois les fausses retirées | 48 / 132 |
| Résumé de moins de 70 caractères (méta-description trop courte) | 21 / 132 |
| Durée annoncée sans rapport avec le volume (20 min pour 400 caractères) | 115 / 132 |

Aucun de ces points ne se règle par un script. Allonger un résumé, écrire une
deuxième question de quiz, trouver une source : ce sont des décisions
d'auteur — et les prendre à votre place reviendrait à inventer du contenu
pédagogique sur des sujets qui ne supportent pas l'à-peu-près, l'aqîda et le
fiqh en particulier.

---

## Trois options, et ce qu'elles coûtent

**1. Publier tel quel.** Le site paraît complet : 132 leçons, 11 matières. Mais
un visiteur qui ouvre une leçon de mathématiques trouve quatre lignes. Google
appelle cela du *thin content* et le déclasse ; un parent appelle cela une
déception, et ne revient pas. Le seul cas où cette option se défend : un usage
interne, par des enseignants qui complètent à l'oral.

**2. Ne publier que ce qui est écrit.** Les 12 leçons d'arabe et les 43 fiches
d'activités — qui sont, elles, complètes et détaillées — passent en ligne ; les
120 autres restent en brouillon dans la console, et sortent au fil de leur
rédaction. Le site est plus petit mais tient ses promesses. C'est ce que je
recommanderais : une matière qui vaut le détour attire mieux que onze qui
déçoivent. Techniquement, c'est une case à décocher par leçon dans la console.

**3. Les écrire.** Je peux rédiger les brouillons matière par matière, en
prenant les leçons d'arabe comme étalon, et vous les relisez avant publication.
Pour les langues, les mathématiques, les sciences et l'informatique, c'est du
travail de rédaction ordinaire. Pour l'aqîda, le fiqh, la sîra et l'histoire de
l'Islam, la question n'est pas la même : ces leçons engagent une doctrine et des
sources, et elles devraient être écrites ou validées par quelqu'un qui a
l'autorité pour le faire. Je peux y préparer la structure et le vocabulaire,
pas trancher le fond.

---

## Détail par matière

Les activités (43 fiches) ne présentent aucun de ces défauts : matériel, étapes
minutées, objectifs et critères d'observation y sont au complet. Elles ont été
reprises telles quelles de `src/data/activitiesData.ts`, où elles dormaient sans
être affichées.

Pour rejouer l'analyse après modification du contenu :

```bash
npm test          # intégrité : liens, quiz, champs obligatoires
```
