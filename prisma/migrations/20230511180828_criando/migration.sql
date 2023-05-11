-- CreateTable
CREATE TABLE "Pessoa" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idade" INTEGER,
    "create_dat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_dat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idade" INTEGER,
    "create_dat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_dat" TIMESTAMP(3) NOT NULL,
    "pessoa_id" TEXT NOT NULL,

    CONSTRAINT "Dependente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
