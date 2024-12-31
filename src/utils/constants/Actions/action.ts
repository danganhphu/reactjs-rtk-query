interface IAction {
  VALUE: string;
  LABEL: string;
}

const ACTION: IAction[] = [
  {
    VALUE: 'DOWNLOAD_PDF',
    LABEL: 'Download quote pdf'
  },
  {
    VALUE: 'REQUOTE_DIFFERENT_TERMS',
    LABEL: 'Requote different terms'
  },
  {
    VALUE: 'REQUOTE_DIFFERENT_PRODUCT',
    LABEL: 'Requote different product'
  },
  {
    VALUE: 'CANCEL_APPLICATION',
    LABEL: 'Cancel application'
  },
  {
    VALUE: 'CONTINUE_APPLICATION',
    LABEL: 'Continue application'
  },
  {
    VALUE: 'CONTINUE_QUOTE',
    LABEL: 'Continue quote'
  }
];

export { ACTION };
