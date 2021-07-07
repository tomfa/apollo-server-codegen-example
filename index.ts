import { PrismaClient } from '@prisma/client';

const doStuff = () => {
  const db = new PrismaClient();

  const bookings = db.booking.findMany({ where: { customerId: 123 } })
}
