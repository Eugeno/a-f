1a. начинаем с `/pages`, **b** и **c** в прелоад.

1b. начинаем `/pages/c/review`, модуль **c** загрузился, модуль **b** запрелоадился

2. заходим в **b**: грузятся **b-index** и **b-review** (а хотелось бы их прелоад),
прелоадится **b-detail-index**

3. идём глубже, попадаем в `pages/b/detail/1/maintenance`,
загрузился **b-detail-component** и **b-maintenance** (а хотелось бы их прелоад),
**b-additional** прелоадится

---

из **c** может быть ссылка на **b-maintenance**, но будучи в **c** мы получаем прелоад
лишь его соседа **b**, а 4 (в данном случае) необходимых жс-файла начнут грузиться
лишь по переходу: **b-index**, **b-detail-index**, **b-detail-component** и **b-maintenance**
(**b-review** и **b-additional** прелоадятся)
