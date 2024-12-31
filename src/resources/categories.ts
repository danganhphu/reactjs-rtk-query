const Categories = {
  gLCategoriesHeader: 'Create a category',
  gLCategoriesProductGLRegister: 'Group Life Registered',
  gIPCategoriesPaymentDurationOption: [
    { value: 'Cease age', text: 'Cease age' },
    { value: '2 years', text: '2 years' },
    { value: '3 years', text: '3 years' },
    { value: '4 years', text: '4 years' },
    { value: '5 years', text: '5 years' }
  ],
  gIPCategoriesNationalInsuranceContributionsOption: [
    { value: 'None', text: 'None' },
    { value: 'Contracted in', text: 'Contracted in' }
  ]
} as const;

export default Categories;
