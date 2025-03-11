export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'
interface OrderStatusProps {
  status: OrderStatus
}

// Estou tipando o objeto e atribuido/traduzindo os status
const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}
export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {/* As chaves representam ifs */}
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}
      {/* O includes é um OU(OR) se um ou outro mostra a cor laranja */}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}