export enum IEventType {
  // orders
  GET_MENUS = 'get_menus',
  CREATE_ORDER = 'create_order',
  GET_ORDER_STATUS = 'get_order_status',
  // notification
  SEND_EMAIL_ORDER_FROM_CUSTOMER = 'send_email_order_from_customer',
  // kitchen
  PROCESS_ORDER = 'process_order',
}
