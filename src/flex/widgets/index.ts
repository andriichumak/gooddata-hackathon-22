import { registerWidget } from "./registry";
import { columnWidget } from "./Column";
import { rowWidget } from "./Row";
import { insightWidget } from "./Insight";
import { descriptionWidget } from "./Description";

registerWidget(columnWidget);
registerWidget(rowWidget);
registerWidget(insightWidget);
registerWidget(descriptionWidget);

export { renderWidget } from "./renderWidget";
