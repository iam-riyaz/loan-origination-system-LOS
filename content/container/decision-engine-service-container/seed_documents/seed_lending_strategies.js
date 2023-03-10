'use strict';
module.exports = {
  'strategy': [{
    'id_number': '5cc1e04a0f711633bff3f1fd',
    'status' : 'active',
    'version' : 1,
    'module_run_order' : [ 
      {
        'lookup_name' : 'sample_credit_bureau_outputs_assignments_0',
        'display_name' : 'Sample Credit Bureau Outputs',
        'active' : true,
        'name' : 'sample_credit_bureau_outputs',
        'type' : 'assignments',
      }, 
      {
        'lookup_name' : 'basic_eligibility_requirements_requirements_1',
        'display_name' : 'Basic Eligibility Requirements',
        'active' : true,
        'name' : 'basic_eligibility_requirements',
        'type' : 'requirements',
      }, 
      {
        'lookup_name' : 'credit_scorecard_scorecard_2',
        'display_name' : 'Credit Scorecard',
        'active' : true,
        'name' : 'credit_scorecard',
        'type' : 'scorecard',
      }, 
      {
        'lookup_name' : 'loan_pricing_and_terms_output_3',
        'display_name' : 'Loan Pricing and Terms',
        'active' : true,
        'name' : 'loan_pricing_and_terms',
        'type' : 'output',
      }, 
      {
        'lookup_name' : 'payment_amount_calculations_calculations_4',
        'display_name' : 'Payment Amount Calculations',
        'active' : true,
        'name' : 'payment_amount_calculations',
        'type' : 'calculations',
      }, 
      {
        'lookup_name' : 'maximum_exposure_limits_requirements_5',
        'display_name' : 'Maximum Exposure Limits',
        'active' : true,
        'name' : 'maximum_exposure_limits',
        'type' : 'requirements',
      },
    ],
    'entitytype' : 'strategy',
    'name' : 'small_business_v1',
    'title' : 'small_business',
    'user' : {
      'creator' : 'DigiFi Support',
      'updater' : 'DigiFi Support',
    },
    'latest_version' : true,
    'display_name' : 'Small Business (v1)',
    'display_title' : 'Small Business',
    'organization': null,
    '__v' : 0,
    'modules' : {
      'sample_credit_bureau_outputs_assignments_0' : [ 
        {
          'name' : 'sample_credit_bureau_outputs',
          'display_name' : 'Sample Credit Bureau Outputs',
          'dataintegration_id' : null,
          'type' : 'assignments',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f233', 
            '5cc1e04a0f711633bff3f235', 
            '5cc1e04a0f711633bff3f237', 
            '5cc1e04a0f711633bff3f239', 
            '5cc1e04a0f711633bff3f23b', 
            '5cc1e04a0f711633bff3f23d', 
            '5cc1e04a0f711633bff3f23f', 
            '5cc1e04a0f711633bff3f241', 
            '5cc1e04a0f711633bff3f243', 
            '5cc1e04a0f711633bff3f245',
          ],
          'description' : 'For client accounts, this is replaced by a live pull with client credentials.',
        },
      ],
      'basic_eligibility_requirements_requirements_1' : [ 
        {
          'name' : 'basic_eligibility_requirements',
          'display_name' : 'Basic Eligibility Requirements',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f1fe', 
            '5cc1e04a0f711633bff3f200', 
            '5cc1e04a0f711633bff3f202', 
            '5cc1e04a0f711633bff3f204', 
            '5cc1e04a0f711633bff3f207',
          ],
          'description' : 'Minimum credit requirements for loan eligibility',
        },
      ],
      'credit_scorecard_scorecard_2' : [ 
        {
          'name' : 'greater_than_500k_revenue',
          'display_name' : 'Greater Than 500K Revenue',
          'dataintegration_id' : null,
          'type' : 'scorecard',
          'conditions' : [ 
            '5cc1e04a0f711633bff3f217',
          ],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f219', 
            '5cc1e04a0f711633bff3f21b', 
            '5cc1e04a0f711633bff3f21d', 
            '5cc1e04a0f711633bff3f21f', 
            '5cc1e04a0f711633bff3f221', 
            '5cc1e04a0f711633bff3f223', 
            '5cc1e04a0f711633bff3f225', 
            '5cc1e04a0f711633bff3f227', 
            '5cc1e04a0f711633bff3f229', 
            '5cc1e04a0f711633bff3f22b', 
            '5cc1e04a0f711633bff3f22d',
          ],
          'initial_score' : '200',
          'description' : 'Scorecard for applicants that own their homes',
          'output_variable' : '5c8a57d6cd3f842b402081b3',
        }, 
        {
          'name' : 'less_than_500k_revenue',
          'type' : 'scorecard',
          'display_name' : 'Less Than 500K Revenue',
          'conditions' : [ 
            '5cc1e04a0f711633bff3f247',
          ],
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f249', 
            '5cc1e04a0f711633bff3f24b', 
            '5cc1e04a0f711633bff3f24d', 
            '5cc1e04a0f711633bff3f24f', 
            '5cc1e04a0f711633bff3f251', 
            '5cc1e04a0f711633bff3f253', 
            '5cc1e04a0f711633bff3f255', 
            '5cc1e04a0f711633bff3f257',
          ],
          'description' : 'Scorecard for applicants that do not own their homes',
          'output_variable' : '5c8a57d6cd3f842b402081b3',
          'initial_score' : '-200',
        },
      ],
      'loan_pricing_and_terms_output_3' : [ 
        {
          'name' : 'loan_pricing_and_terms',
          'display_name' : 'Loan Pricing and Terms',
          'dataintegration_id' : null,
          'type' : 'output',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f20d', 
            '5cc1e04a0f711633bff3f20f', 
            '5cc1e04a0f711633bff3f211', 
            '5cc1e04a0f711633bff3f213', 
            '5cc1e04a0f711633bff3f215',
          ],
          'description' : 'Assign the loan pricing and terms based on custom score',
        },
      ],
      'payment_amount_calculations_calculations_4' : [ 
        {
          'name' : 'post_pricing_calculations',
          'display_name' : 'Post Pricing Calculations',
          'dataintegration_id' : null,
          'type' : 'calculations',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f259', 
            '5cc1e04a0f711633bff3f25b',
          ],
          'description' : 'Calculation of values that required pricing outputs',
        },
      ],
      'maximum_exposure_limits_requirements_5' : [ 
        {
          'name' : 'maximum_exposure_limits',
          'display_name' : 'Maximum Exposure Limits',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cc1e04a0f711633bff3f22f', 
            '5cc1e04a0f711633bff3f231',
          ],
          'description' : 'Limits and caps based on credit ratios',
        },
      ],
    },
    'description' : 'Underwriting for Small Business Loans',
    'locked' : true,
  }, {
    'id_number' : '5cbf76738f0c457da2991b30',
    'status' : 'active',
    'version' : 1,
    'module_run_order' : [ 
      {
        'lookup_name' : 'sample_credit_bureau_outputs_assignments_0',
        'display_name' : 'Sample Credit Bureau Outputs',
        'active' : true,
        'name' : 'sample_credit_bureau_outputs',
        'type' : 'assignments',
      }, 
      {
        'lookup_name' : 'basic_eligibility_requirements_requirements_1',
        'display_name' : 'Basic Eligibility Requirements',
        'active' : true,
        'name' : 'basic_eligibility_requirements',
        'type' : 'requirements',
      }, 
      {
        'lookup_name' : 'credit_scorecard_scorecard_2',
        'display_name' : 'Credit Scorecard',
        'active' : true,
        'name' : 'credit_scorecard',
        'type' : 'scorecard',
      }, 
      {
        'lookup_name' : 'loan_pricing_and_terms_output_3',
        'display_name' : 'Loan Pricing and Terms',
        'active' : true,
        'name' : 'loan_pricing_and_terms',
        'type' : 'output',
      }, 
      {
        'lookup_name' : 'payment_amount_calculations_calculations_4',
        'display_name' : 'Payment Amount Calculations',
        'active' : true,
        'name' : 'payment_amount_calculations',
        'type' : 'calculations',
      }, 
      {
        'lookup_name' : 'maximum_exposure_limits_requirements_5',
        'display_name' : 'Maximum Exposure Limits',
        'active' : true,
        'name' : 'maximum_exposure_limits',
        'type' : 'requirements',
      },
    ],
    'entitytype' : 'strategy',
    'name' : 'personal_loans_v1',
    'title' : 'personal_loans',
    'user' : {
      'creator' : 'DigiFi Support',
      'updater' : 'DigiFi Support',
    },
    'latest_version' : true,
    'display_name' : 'Personal Loans (v1)',
    'display_title' : 'Personal Loans',
    'organization' : '5c8a57d5cd3f842b402081a3',
    '__v' : 0,
    'modules' : {
      'sample_credit_bureau_outputs_assignments_0' : [ 
        {
          'name' : 'sample_credit_bureau_outputs',
          'display_name' : 'Sample Credit Bureau Outputs',
          'dataintegration_id' : null,
          'type' : 'assignments',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cbf76738f0c457da2991b3e', 
            '5cbf76738f0c457da2991b40', 
            '5cbf76738f0c457da2991b42', 
            '5cbf76738f0c457da2991b44', 
            '5cbf76738f0c457da2991b46', 
            '5cbf76738f0c457da2991b48', 
            '5cbf76738f0c457da2991b4a', 
            '5cbf76738f0c457da2991b4c', 
            '5cbf76738f0c457da2991b4e', 
            '5cbf76738f0c457da2991b50',
          ],
          'description' : 'For client accounts, this is replaced by a live pull with client credentials.',
        },
      ],
      'basic_eligibility_requirements_requirements_1' : [ 
        {
          'name' : 'basic_eligibility_requirements',
          'display_name' : 'Basic Eligibility Requirements',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cbf76738f0c457da2991b31', 
            '5cbf76738f0c457da2991b33', 
            '5cbf76738f0c457da2991b35', 
            '5cbf76738f0c457da2991b37', 
            '5cbf76738f0c457da2991b3a',
          ],
          'description' : 'Minimum credit requirements for loan eligibility',
        },
      ],
      'credit_scorecard_scorecard_2' : [ 
        {
          'name' : 'home_owners',
          'display_name' : 'Home Owners',
          'dataintegration_id' : null,
          'type' : 'scorecard',
          'conditions' : [ 
            '5cbf76738f0c457da2991b52',
          ],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cbf76738f0c457da2991b54', 
            '5cbf76738f0c457da2991b56', 
            '5cbf76738f0c457da2991b58', 
            '5cbf76738f0c457da2991b5a', 
            '5cbf76738f0c457da2991b5c', 
            '5cbf76738f0c457da2991b5e', 
            '5cbf76738f0c457da2991b60', 
            '5cbf76738f0c457da2991b62', 
            '5cbf76738f0c457da2991b64', 
            '5cbf76738f0c457da2991b66', 
            '5cbf76738f0c457da2991b68',
          ],
          'initial_score' : '200',
          'description' : 'Scorecard for applicants that own their homes',
          'output_variable' : '5c8a57d6cd3f842b402081b3',
        }, 
        {
          'name' : 'renters',
          'type' : 'scorecard',
          'display_name' : 'Renters',
          'conditions' : [ 
            '5cbf76738f0c457da2991b78',
          ],
          'ruleset' : [ 
            '5cbf76738f0c457da2991b7a', 
            '5cbf76738f0c457da2991b7c', 
            '5cbf76738f0c457da2991b7e', 
            '5cbf76738f0c457da2991b80', 
            '5cbf76738f0c457da2991b82', 
            '5cbf76738f0c457da2991b84', 
            '5cbf76738f0c457da2991b86', 
            '5cbf76738f0c457da2991b88',
          ],
          'description' : 'Scorecard for applicants that do not own their homes',
          'output_variable' : '5c8a57d6cd3f842b402081b3',
          'initial_score' : '-200',
        },
      ],
      'loan_pricing_and_terms_output_3' : [ 
        {
          'name' : 'loan_pricing_and_terms',
          'display_name' : 'Loan Pricing and Terms',
          'dataintegration_id' : null,
          'type' : 'output',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cbf76738f0c457da2991b6a', 
            '5cbf76738f0c457da2991b6c', 
            '5cbf76738f0c457da2991b6e', 
            '5cbf76738f0c457da2991b70', 
            '5cbf76738f0c457da2991b72',
          ],
          'description' : 'Assign the loan pricing and terms based on custom score',
        },
      ],
      'payment_amount_calculations_calculations_4' : [ 
        {
          'name' : 'post_pricing_calculations',
          'display_name' : 'Post Pricing Calculations',
          'dataintegration_id' : null,
          'type' : 'calculations',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cbf76738f0c457da2991b74', 
            '5cbf76738f0c457da2991b76',
          ],
          'description' : 'Calculation of values that required pricing outputs',
        },
      ],
      'maximum_exposure_limits_requirements_5' : [ 
        {
          'name' : 'maximum_exposure_limits',
          'display_name' : 'Maximum Exposure Limits',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5cbf76738f0c457da2991b8a', 
            '5cbf76738f0c457da2991b8c',
          ],
          'description' : 'Limits and caps based on credit ratios',
        },
      ],
    },
    'description' : 'Underwriting for Personal Loans',
    'locked': true,
  }, {
    'id_number' : '5c9ba27f67eceb073c309590',
    'status' : 'active',
    'version' : 1,
    'module_run_order' : [ 
      {
        'type' : 'calculations',
        'name' : 'initialize_variables',
        'active' : true,
        'display_name' : 'Initialize Variables',
        'lookup_name' : 'initialize_variables_calculations_0',
      }, 
      {
        'type' : 'requirements',
        'name' : 'proof_of_income',
        'active' : true,
        'display_name' : 'Proof Of Income',
        'lookup_name' : 'proof_of_income_requirements_1',
      }, 
      {
        'type' : 'output',
        'name' : 'purchase_minimums_and_maximums_',
        'active' : true,
        'display_name' : 'Purchase Minimums and Maximums ',
        'lookup_name' : 'purchase_minimums_and_maximums__output_2',
      }, 
      {
        'lookup_name' : 'refi_minimums_and_maximums__output_3',
        'display_name' : 'Refi Minimums and Maximums ',
        'active' : true,
        'name' : 'refi_minimums_and_maximums_',
        'type' : 'output',
      }, 
      {
        'type' : 'requirements',
        'name' : 'mortgage_approval_requirements',
        'active' : true,
        'display_name' : 'Mortgage Approval Requirements',
        'lookup_name' : 'mortgage_approval_requirements_requirements_4',
      }, 
      {
        'type' : 'output',
        'name' : 'pricing_and_terms',
        'active' : true,
        'display_name' : 'Pricing and Terms',
        'lookup_name' : 'pricing_and_terms_output_5',
      }, 
      {
        'lookup_name' : 'payment_amount_calculations_calculations_6',
        'display_name' : 'Payment Amount Calculations',
        'active' : true,
        'name' : 'payment_amount_calculations',
        'type' : 'calculations',
      },
    ],
    'entitytype' : 'strategy',
    'name' : 'elite_jumbo_mortgage_v1',
    'title' : 'elite_jumbo_mortgage',
    'user' : {
      'creator' : 'DigiFi Support',
      'updater' : 'DigiFi Support',
    },
    'latest_version' : true,
    'display_name' : 'Elite Jumbo Mortgage (v1)',
    'display_title' : 'Elite Jumbo Mortgage',
    'organization' : '5c8a57d5cd3f842b402081a3',
    '__v' : 0,
    'modules' : {
      'initialize_variables_calculations_0' : [ 
        {
          'name' : 'initialize_variables',
          'display_name' : 'Initialize Variables',
          'dataintegration_id' : null,
          'type' : 'calculations',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095d3', 
            '5c9ba27f67eceb073c3095d5', 
            '5c9ba27f67eceb073c3095d7', 
            '5c9ba27f67eceb073c3095d9', 
            '5c9ba27f67eceb073c3095db', 
            '5c9ba27f67eceb073c3095dd',
          ],
        },
      ],
      'proof_of_income_requirements_1' : [ 
        {
          'name' : 'proof_of_income',
          'display_name' : 'Proof of Income',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c30959b',
          ],
        },
      ],
      'purchase_minimums_and_maximums__output_2' : [ 
        {
          'name' : 'primary_residence_purchase',
          'display_name' : 'Primary Residence Purchase',
          'dataintegration_id' : null,
          'type' : 'output',
          'conditions' : [ 
            '5c9ba27f67eceb073c309591', 
            '5c9ba27f67eceb073c309593',
          ],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c309595', 
            '5c9ba27f67eceb073c309597', 
            '5c9ba27f67eceb073c309599',
          ],
        }, 
        {
          'name' : 'second_home_purchase',
          'type' : 'output',
          'display_name' : 'Second Home Purchase',
          'conditions' : [ 
            '5c9ba27f67eceb073c30959d', 
            '5c9ba27f67eceb073c30959f',
          ],
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095a1', 
            '5c9ba27f67eceb073c3095a3', 
            '5c9ba27f67eceb073c3095a5',
          ],
        }, 
        {
          'name' : 'investment_purchase',
          'type' : 'output',
          'display_name' : 'Investment Purchase',
          'conditions' : [ 
            '5c9ba27f67eceb073c3095e5', 
            '5c9ba27f67eceb073c3095e7',
          ],
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095e9', 
            '5c9ba27f67eceb073c3095eb', 
            '5c9ba27f67eceb073c3095ed',
          ],
        },
      ],
      'refi_minimums_and_maximums__output_3' : [ 
        {
          'name' : 'primary_residence_refinance',
          'display_name' : 'Primary Residence Refinance',
          'dataintegration_id' : null,
          'type' : 'output',
          'conditions' : [ 
            '5c9ba27f67eceb073c3095ad', 
            '5c9ba27f67eceb073c3095af',
          ],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095b1', 
            '5c9ba27f67eceb073c3095b3', 
            '5c9ba27f67eceb073c3095b5',
          ],
        }, 
        {
          'name' : 'second_home_refinance',
          'type' : 'output',
          'display_name' : 'Second Home Refinance',
          'conditions' : [ 
            '5c9ba27f67eceb073c3095b7', 
            '5c9ba27f67eceb073c3095b9',
          ],
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095bb', 
            '5c9ba27f67eceb073c3095bd', 
            '5c9ba27f67eceb073c3095bf',
          ],
        }, 
        {
          'name' : 'investment_refinance',
          'type' : 'output',
          'display_name' : 'Investment Refinance',
          'conditions' : [ 
            '5c9ba27f67eceb073c3095c9', 
            '5c9ba27f67eceb073c3095cb',
          ],
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095cd', 
            '5c9ba27f67eceb073c3095cf', 
            '5c9ba27f67eceb073c3095d1',
          ],
        },
      ],
      'mortgage_approval_requirements_requirements_4' : [ 
        {
          'name' : 'mortgage_approval_requirements',
          'display_name' : 'Mortgage Approval Requirements',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095a7', 
            '5c9ba27f67eceb073c3095a9', 
            '5c9ba27f67eceb073c3095ab', 
            '5c9ba31b050c6d06eea9a2d7',
          ],
        },
      ],
      'pricing_and_terms_output_5' : [ 
        {
          'name' : 'prime',
          'display_name' : 'Prime',
          'dataintegration_id' : null,
          'type' : 'output',
          'conditions' : [ 
            '5c9ba27f67eceb073c3095df',
          ],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095e1', 
            '5c9ba27f67eceb073c3095e3',
          ],
        }, 
        {
          'name' : 'near_prime',
          'type' : 'output',
          'display_name' : 'Near Prime',
          'conditions' : [ 
            '5c9ba27f67eceb073c3095c1',
          ],
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095c3', 
            '5c9ba27f67eceb073c3095c5',
          ],
        },
      ],
      'payment_amount_calculations_calculations_6' : [ 
        {
          'name' : 'post_pricing_calculations',
          'display_name' : 'Post Pricing Calculations',
          'dataintegration_id' : null,
          'type' : 'calculations',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5c9ba27f67eceb073c3095c7',
          ],
          'description' : 'Calculation of values that required pricing outputs',
        },
      ],
    },
    'description' : 'Underwriting for Elite Jumbo Mortgage',
    'locked' : true,
  },],
};