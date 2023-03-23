1. start with route `/pages`, **b** и **c** will be preloaded
(or with `/pages/c/review`, module **c** will be loaded, module **b** will be preloaded).

2. navigate to **b**: **b-index** and **b-review** loaded (not preloaded at the stage 1),
**b-detail-index** will be preloaded.

3. go deeper, `pages/b/detail/1/maintenance`,
**b-detail-component** and **b-maintenance** loaded (not preloaded at the previous stages),
**b-additional** will be preloaded.
