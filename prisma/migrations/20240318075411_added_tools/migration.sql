-- CreateTable
CREATE TABLE "Tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "demo" TEXT,
    "icon" TEXT,
    "department" TEXT[],

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);
