rm prisma/dev.db
rm -rf prisma/migrations
npx prisma migrate dev --name init
npx prisma generate 
echo "restart !"