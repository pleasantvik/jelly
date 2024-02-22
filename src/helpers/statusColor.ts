export const statusColor = (text: string) => {
  switch (text) {
    case 'fulfilled':
      return 'text-dark font-normal';
    case 'canceled':
    case 'pending':
    case 'out of stock':
      return 'text-danger font-normal';
    case 'on going':
      return 'text-info-yellow font-normal';
    case 'Basic':
    case 'Unlimited':
      return 'text-dark-light font-normal';
    case 'Recommended':
      return 'text-info font-normal';
    case 'Expenses':
      return 'text-danger-accent font-normal';
    case 'Income':
      return 'text-primary font-normal';

    default:
      return '';
  }
};
