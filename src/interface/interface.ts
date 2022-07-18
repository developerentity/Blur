export interface IBlurOrder {
  id: number | string;
  category: string | undefined;
  name: string | undefined;
  poster: string | undefined;
  price: number | string | undefined;
  quantity: number;
}

export interface INotification {
  message: string;
  key?: number | string;
  messageType?: "error" | "required" | "created" | "updated" | "deleted";
  dismissed?: boolean;
  options: {
    variant?: "default" | "info" | "success" | "warning" | "error";
    onClose?: (
      event: any,
      reacon: any,
      key: number | string | undefined
    ) => void;
  };
}
