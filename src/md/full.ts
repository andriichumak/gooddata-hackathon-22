/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-11-10T08:59:58.204Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: campaign_channels.category
 */
export const Category: IAttribute = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaign_id
 */
export const CampaignId: IAttribute = newAttribute("campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaign_name
 */
export const CampaignName: IAttribute = newAttribute("campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId: IAttribute = newAttribute("customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customer_name
 */
export const CustomerName: IAttribute = newAttribute("customer_name");
/**
 * Attribute Title: Region
 * Attribute ID: region
 */
export const Region: IAttribute = newAttribute("region");
/**
 * Attribute Title: State
 * Attribute ID: state
 */
export const State = {
  /**
   * Display Form Title: Location
   * Display Form ID: geo__state__location
   */
  Location: newAttribute("geo__state__location")
  /**
   * Display Form Title: State
   * Display Form ID: state
   */,
  Default: newAttribute("state"),
};
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId: IAttribute = newAttribute("product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: product_name
 */
export const ProductName: IAttribute = newAttribute("product_name");
/**
 * Attribute Title: Category
 * Attribute ID: products.category
 */
export const Category_1: IAttribute = newAttribute("products.category");
/**
 * Metric Title: # of Active Customers
 * Metric ID: amount_of_active_customers
 * Metric Type: MAQL Metric
 */
export const NrOfActiveCustomers: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("amount_of_active_customers", "measure")
);
/**
 * Metric Title: # of Orders
 * Metric ID: amount_of_orders
 * Metric Type: MAQL Metric
 */
export const NrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("amount_of_orders", "measure"));
/**
 * Metric Title: # of Top Customers
 * Metric ID: amount_of_top_customers
 * Metric Type: MAQL Metric
 */
export const NrOfTopCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("amount_of_top_customers", "measure"));
/**
 * Metric Title: # of Valid Orders
 * Metric ID: amount_of_valid_orders
 * Metric Type: MAQL Metric
 */
export const NrOfValidOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("amount_of_valid_orders", "measure"));
/**
 * Metric Title: Campaign Spend
 * Metric ID: campaign_spend
 * Metric Type: MAQL Metric
 */
export const CampaignSpend: IMeasure<IMeasureDefinition> = newMeasure(idRef("campaign_spend", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: order_amount
 * Metric Type: MAQL Metric
 */
export const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("order_amount", "measure"));
/**
 * Metric Title: % Revenue
 * Metric ID: percent_revenue
 * Metric Type: MAQL Metric
 */
export const PercentRevenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("percent_revenue", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Customers
 * Metric ID: percent_revenue_from_top_10_customers
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10Customers: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percent_revenue_from_top_10_customers", "measure")
);
/**
 * Metric Title: % Revenue from Top 10% Customers
 * Metric ID: percent_revenue_from_top_10_percent_customers
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10PercentCustomers: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percent_revenue_from_top_10_percent_customers", "measure")
);
/**
 * Metric Title: % Revenue from Top 10% Products
 * Metric ID: percent_revenue_from_top_10_percent_products
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10PercentProducts: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percent_revenue_from_top_10_percent_products", "measure")
);
/**
 * Metric Title: % Revenue from Top 10 Products
 * Metric ID: percent_revenue_from_top_10_products
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10Products: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percent_revenue_from_top_10_products", "measure")
);
/**
 * Metric Title: % Revenue in Category
 * Metric ID: percent_revenue_in_category
 * Metric Type: MAQL Metric
 */
export const PercentRevenueInCategory: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percent_revenue_in_category", "measure")
);
/**
 * Metric Title: % Revenue per Product
 * Metric ID: percent_revenue_per_product
 * Metric Type: MAQL Metric
 */
export const PercentRevenuePerProduct: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percent_revenue_per_product", "measure")
);
/**
 * Metric Title: Revenue
 * Metric ID: revenue
 * Metric Type: MAQL Metric
 */
export const Revenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue", "measure"));
/**
 * Metric Title: Revenue (Clothing)
 * Metric ID: revenue-clothing
 * Metric Type: MAQL Metric
 */
export const RevenueClothing: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue-clothing", "measure"));
/**
 * Metric Title: Revenue (Electronic)
 * Metric ID: revenue-electronic
 * Metric Type: MAQL Metric
 */
export const RevenueElectronic: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue-electronic", "measure"));
/**
 * Metric Title: Revenue (Home)
 * Metric ID: revenue-home
 * Metric Type: MAQL Metric
 */
export const RevenueHome: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue-home", "measure"));
/**
 * Metric Title: Revenue (Outdoor)
 * Metric ID: revenue-outdoor
 * Metric Type: MAQL Metric
 */
export const RevenueOutdoor: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue-outdoor", "measure"));
/**
 * Metric Title: Revenue per Customer
 * Metric ID: revenue_per_customer
 * Metric Type: MAQL Metric
 */
export const RevenuePerCustomer: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_per_customer", "measure"));
/**
 * Metric Title: Revenue per Dollar Spent
 * Metric ID: revenue_per_dollar_spent
 * Metric Type: MAQL Metric
 */
export const RevenuePerDollarSpent: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("revenue_per_dollar_spent", "measure")
);
/**
 * Metric Title: Revenue / Top 10
 * Metric ID: revenue_top_10
 * Metric Type: MAQL Metric
 */
export const RevenueTop10: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_top_10", "measure"));
/**
 * Metric Title: Revenue / Top 10%
 * Metric ID: revenue_top_10_percent
 * Metric Type: MAQL Metric
 */
export const RevenueTop10Percent: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_top_10_percent", "measure"));
/**
 * Metric Title: Total Revenue
 * Metric ID: total_revenue
 * Metric Type: MAQL Metric
 */
export const TotalRevenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_revenue", "measure"));
/**
 * Metric Title: Total Revenue (No Filters)
 * Metric ID: total_revenue-no_filters
 * Metric Type: MAQL Metric
 */
export const TotalRevenueNoFilters: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("total_revenue-no_filters", "measure")
);
/**
 * Fact Title: Budget
 * Fact ID: budget
 */
export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: spend
 */
export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Date - Minute
 * Attribute ID: date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinute: IAttribute = newAttribute("date.minute");
/**
 * Attribute Title: Date - Hour
 * Attribute ID: date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHour: IAttribute = newAttribute("date.hour");
/**
 * Attribute Title: Date - Date
 * Attribute ID: date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate: IAttribute = newAttribute("date.day");
/**
 * Attribute Title: Date - Week/Year
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekYear: IAttribute = newAttribute("date.week");
/**
 * Attribute Title: Date - Month/Year
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear: IAttribute = newAttribute("date.month");
/**
 * Attribute Title: Date - Quarter/Year
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.quarter");
/**
 * Attribute Title: Date - Year
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.year");
/**
 * Attribute Title: Date - Minute of Hour
 * Attribute ID: date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinuteOfHour: IAttribute = newAttribute("date.minuteOfHour");
/**
 * Attribute Title: Date - Hour of Day
 * Attribute ID: date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHourOfDay: IAttribute = newAttribute("date.hourOfDay");
/**
 * Attribute Title: Date - Day of Week
 * Attribute ID: date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeek: IAttribute = newAttribute("date.dayOfWeek");
/**
 * Attribute Title: Date - Day of Month
 * Attribute ID: date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.dayOfMonth");
/**
 * Attribute Title: Date - Day of Year
 * Attribute ID: date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.dayOfYear");
/**
 * Attribute Title: Date - Week of Year
 * Attribute ID: date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekOfYear: IAttribute = newAttribute("date.weekOfYear");
/**
 * Attribute Title: Date - Month of Year
 * Attribute ID: date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfYear: IAttribute = newAttribute("date.monthOfYear");
/**
 * Attribute Title: Date - Quarter of Year
 * Attribute ID: date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterOfYear: IAttribute = newAttribute("date.quarterOfYear");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Revenue by product category
   * Insight ID: bf6d2b2f-5872-4ec5-bdae-82d2dad81a9f
   */
  RevenueByProductCategory: "bf6d2b2f-5872-4ec5-bdae-82d2dad81a9f"
  /**
   * Insight Title: Campaign Spend
   * Insight ID: campaign_spend
   */,
  CampaignSpend_1: "campaign_spend"
  /**
   * Insight Title: Customers Trend
   * Insight ID: customers_trend
   */,
  CustomersTrend: "customers_trend"
  /**
   * Insight Title: % Revenue per Product by Customer and Category
   * Insight ID: percent_revenue_per_product_by_customer_and_category
   */,
  PercentRevenuePerProductByCustomerAndCategory: "percent_revenue_per_product_by_customer_and_category"
  /**
   * Insight Title: Percentage of Customers by Region
   * Insight ID: percentage_of_customers_by_region
   */,
  PercentageOfCustomersByRegion: "percentage_of_customers_by_region"
  /**
   * Insight Title: Product Breakdown
   * Insight ID: product_breakdown
   */,
  ProductBreakdown: "product_breakdown"
  /**
   * Insight Title: Product Categories Pie Chart
   * Insight ID: product_categories_pie_chart
   */,
  ProductCategoriesPieChart: "product_categories_pie_chart"
  /**
   * Insight Title: Product Revenue Comparison (over previous period)
   * Insight ID: product_revenue_comparison-over_previous_period
   */,
  ProductRevenueComparisonOverPreviousPeriod: "product_revenue_comparison-over_previous_period"
  /**
   * Insight Title: Product Saleability
   * Insight ID: product_saleability
   */,
  ProductSaleability: "product_saleability"
  /**
   * Insight Title: Revenue and Quantity by Product and Category
   * Insight ID: revenue_and_quantity_by_product_and_category
   */,
  RevenueAndQuantityByProductAndCategory: "revenue_and_quantity_by_product_and_category"
  /**
   * Insight Title: Revenue by Category Trend
   * Insight ID: revenue_by_category_trend
   */,
  RevenueByCategoryTrend: "revenue_by_category_trend"
  /**
   * Insight Title: Revenue by Product
   * Insight ID: revenue_by_product
   */,
  RevenueByProduct: "revenue_by_product"
  /**
   * Insight Title: Revenue per $ vs Spend by Campaign
   * Insight ID: revenue_per_usd_vs_spend_by_campaign
   */,
  RevenuePer$VsSpendByCampaign: "revenue_per_usd_vs_spend_by_campaign"
  /**
   * Insight Title: Revenue Trend
   * Insight ID: revenue_trend
   */,
  RevenueTrend: "revenue_trend"
  /**
   * Insight Title: Top 10 Customers
   * Insight ID: top_10_customers
   */,
  Top10Customers: "top_10_customers"
  /**
   * Insight Title: Top 10 Products
   * Insight ID: top_10_products
   */,
  Top10Products: "top_10_products",
};
export const Dashboards = {
  /**
   * Dashboard Title: Customer
   * Dashboard ID: customer
   */
  Customer: "customer"
  /**
   * Dashboard Title: Revenue
   * Dashboard ID: revenue
   */,
  Revenue_1: "revenue",
};
