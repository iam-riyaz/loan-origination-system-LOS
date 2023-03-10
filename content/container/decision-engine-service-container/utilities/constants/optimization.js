'use strict';

const binary = [
  {
    subsection: 'observation_counts',
    subsection_title: 'Counts',
    section: 'observations',
    section_title: 'Observations',
    unit: 'count',
    cardTitle: 'Observations: Counts',
    chartFunc: '_getDataSourceCharts',
    tableFunc: '_getDataSourceTables',
    dataFunc: '_transformDataSourceData',
    index: 0,
  }, {
    subsection: 'observation_rates',
    subsection_title: 'Rates',
    section: 'observations',
    section_title: 'Observations',
    unit: 'percentage',
    chartFunc: '_getDataSourceCharts',
    tableFunc: '_getDataSourceTables',
    dataFunc: '_transformDataSourceData',
    index: 1,
    cardTitle: 'Observations: Rates',
  }, {
    subsection: 'summary',
    subsection_title: 'Summary',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'count',
    chartFunc: '_getSummaryCharts',
    tableFunc: '_getSummaryTables',
    filters: [ '_getDataSourceTypeFilter', ],
    index: 2,
    cardTitle: 'Predictions: Summary',
  }, {
    subsection: 'distribution_counts',
    subsection_title: 'Distribution Counts',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'count',
    chartFunc: '_getDistributionCharts',
    tableFunc: '_getDistributionTables',
    filters: [
      '_getDataSourceTypeFilter',
      '_getDistributionChartTypeFilter',
      '_getDistributionGranularityFilter'
    ],
    cardTitle: 'Predictions: Distribution Counts',
    index: 3,
  }, {
    subsection: 'distribution_rates',
    subsection_title: 'Distribution Rates',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'percentage',
    chartFunc: '_getDistributionCharts',
    filters: [ '_getDataSourceTypeFilter', '_getDistributionChartTypeFilter', '_getDistributionGranularityFilter'],
    tableFunc: '_getDistributionTables',
    index: 4,
    cardTitle: 'Predictions: Distribution Rates',
  }, {
    subsection: 'accuracy_rate',
    subsection_title: 'Accuracy Rate',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'percentage',
    chartFunc: '_getAccuracyRateCharts',
    tableFunc: '_getAccuracyRateTables',
    index: 5,
    cardTitle: 'Model Power: Accuracy Rate',
    filters: ['_getDataSourceTypeFilter', '_getAccuracyRateChartTypeFilter'],
  }, {
    subsection: 'roc_curve',
    subsection_title: 'ROC Curve',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'count',
    chartFunc: '_getRocCurveCharts',
    tableFunc: '',
    index: 6,
    cardTitle: 'Model Power: ROC Curve',
  }, {
    subsection: 'lorenz_curve',
    subsection_title: 'Lorenz Curve',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'percentage',
    chartFunc: '_getLorenzCurveCharts',
    tableFunc: '_getLorenzCurveTables',
    // tableFunc: '',
    index: 7,
    cardTitle: 'Model Power: Lorenz Curve',
    filters: [ '_getDataSourceTypeFilter', ],
  }, {
    subsection: 'ks_curve',
    subsection_title: 'KS Curve',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'percentage',
    chartFunc: '_getKSCurveCharts',
    tableFunc: '_getKSCurveTables',
    index: 8,
    cardTitle: 'Model Power: KS Curve',
    filters: ['_getDataSourceTypeFilter', ],
  }, {
    subsection: 'ks_score',
    subsection_title: 'KS Score',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'percentage',
    chartFunc: '_getKSScoreCharts',
    tableFunc: '_getKSCurveTables',
    index: 9,
    cardTitle: 'Model Power: KS Score',
    filters: [ '_getDataSourceTypeFilter', ],
  }, {
    subsection: 'percent_exceeding_threshold',
    subsection_title: 'Percent Exceeding Threshold',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'percentage',
    chartFunc: '_getThresholdPercentCharts',
    tableFunc: '_getThresholdPercentTables',
    index: 10,
    cardTitle: 'Model Power: Percent Exceeding Threshold',
    filters: [ '_getDataSourceTypeFilter', ],
  }, {
    subsection: 'advanced_metrics',
    subsection_title: 'Advanced Metrics',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'percentage',
    chartFunc: '_getAdvancedMetricsCharts',
    tableFunc: '_getAdvancedMetricsTables',
    index: 11,
    cardTitle: 'Model Power: Accuracy Rate',
    filters: [ '_getDataSourceTypeFilter', '_getAdvancedMetricsFilter', ],
  },
]

const regression = [
  {
    subsection: 'observation_counts',
    subsection_title: 'Counts',
    section: 'observations',
    section_title: 'Observations',
    unit: 'count',
    cardTitle: 'Observations: Counts',
    chartFunc: '_getRegressionDataSourceCharts',
    tableFunc: '_getRegressionDataSourceTables',
    dataFunc: '_transformDataSourceData',
    index: 0,
  }, {
    subsection: 'observation_metrics',
    subsection_title: 'Metrics',
    section: 'observations',
    section_title: 'Observations',
    unit: 'count',
    filters: [ '_getDataSourceTypeFilter', ],
    chartFunc: '_getRegressionMetricsCharts',
    tableFunc: '_getRegressionMetricsTables',
    index: 1,
    cardTitle: 'Observations: Metrics',
  },
  {
    subsection: 'distributions',
    subsection_title: 'Distributions',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'count',
    filters: [ '_getDataSourceTypeFilter', ],
    chartFunc: '_getRegressionDistributionCharts',
    tableFunc: '_getRegressionDistributionTables',
    cardTitle: 'Predictions: Distributions',
    index: 2,
  }, {
    subsection: 'distribution_rates',
    subsection_title: 'Metrics',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'count',
    filters: [ '_getDataSourceTypeFilter', ],
    chartFunc: '_getRegressionPredictionMetricsCharts',
    tableFunc: '_getRegressionPredictionMetricsTables',
    index: 3,
    cardTitle: 'Predictions: Metrics',
  },
  {
    subsection: 'regression_plot',
    subsection_title: 'Regression Plot',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'count',
    filters: [ '_getDataSourceTypeFilter', '_getRegressionPlotFilter' ],
    chartFunc: '_getRegressionPlotCharts',
    tableFunc: '',
    index: 4,
    cardTitle: 'Model Power: Regression Plot',
  },
  {
    subsection: 'confidence_intervals',
    subsection_title: 'Confidence Intervals',
    section: 'model_power',
    section_title: 'Model Power',
    unit: 'count',
    filters: [ '_getDataSourceTypeFilter', '_getRegressionPlotFilter', '__getConfidenceIntervalsFilter' ],
    chartFunc: '_getConfidenceIntervalCharts',
    tableFunc: '',
    index: 5,
    cardTitle: 'Model Power: Confidence Intervals',
  },
]

const categorical = [
  {
    subsection: 'observation_counts',
    subsection_title: 'Counts',
    section: 'observations',
    section_title: 'Observations',
    unit: 'count',
    cardTitle: 'Observations: Counts',
    chartFunc: '_getCategoricalObservationCharts',
    tableFunc: '_getCategoricalObservationTables',
    dataFunc: '_transformDataSourceData',
    index: 0,
  }, {
    subsection: 'observation_rates',
    subsection_title: 'Rates',
    section: 'observations',
    section_title: 'Observations',
    unit: 'percentage',
    chartFunc: '_getCategoricalObservationCharts',
    tableFunc: '_getCategoricalObservationTables',
    dataFunc: '_transformDataSourceData',
    index: 1,
    cardTitle: 'Observations: Rates',
  }, {
    subsection: 'distributions',
    subsection_title: 'Distributions',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'count',
    chartFunc: '_getCategoricalDistributionCharts',
    filters: [ '_getDataSourceTypeFilter', ],
    tableFunc: '_getCategoricalPredictionTables',
    cardTitle: 'Predictions: Distributions',
    index: 2,
  }, {
    subsection: 'accuracy_counts',
    subsection_title: 'Accuracy Counts',
    section: 'predictions',
    section_title: 'Predictions',
    unit: 'count',
    filters: [ '_getDataSourceTypeFilter', ],
    chartFunc: '_getCategoricalAccuracyCharts',
    tableFunc: '_getCategoricalPredictionTables',
    cardTitle: 'Predictions: Accuracy Counts',
    index: 3,
  }, {
    subsection: 'accuracy_rates',
    subsection_title: 'Accuracy Rates',
    section: 'predictions',
    section_title: 'Predictions',
    filters: [ '_getDataSourceTypeFilter', ],
    unit: 'percentage',
    chartFunc: '_getCategoricalAccuracyCharts',
    tableFunc: '_getCategoricalPredictionTables',
    cardTitle: 'Predictions: Accuracy Rates',
    index: 4,
  },
]

module.exports = {
  binary,
  regression,
  categorical
};