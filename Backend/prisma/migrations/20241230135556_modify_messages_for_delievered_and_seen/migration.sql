-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "delivered" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seen" BOOLEAN NOT NULL DEFAULT false;
