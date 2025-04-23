/*
  Warnings:

  - Changed the type of `numberAccount` on the `InternalAccount` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "InternalAccount" DROP COLUMN "numberAccount",
ADD COLUMN     "numberAccount" INTEGER NOT NULL,
ALTER COLUMN "agency" SET DEFAULT '10';

-- CreateIndex
CREATE UNIQUE INDEX "InternalAccount_numberAccount_key" ON "InternalAccount"("numberAccount");
