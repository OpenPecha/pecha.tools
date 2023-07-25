-- CreateEnum
CREATE TYPE "role" AS ENUM ('admin', 'leader', 'annotator', 'reviewer');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "role";
