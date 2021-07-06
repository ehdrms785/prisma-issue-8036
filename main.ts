import { PrismaClient } from "@prisma/client";


async function main() {
  const prisma = new PrismaClient();

  // Excute This First

  // await prisma.person.create({
  //   data: {id: 1}
  // });
  // await prisma.post.create({
  //   data: {title: "First Post", LikedPeople: {connect: {id: 1}}},
  // });
  // await prisma.post.create({
  //   data: {title: "Second Post"},
  // });
  // await prisma.post.create({
  //   data: {title: "Third Post"},
  // });
  // await prisma.post.create({
  //   data: {title: "Fourth Post"},
  // });
  // await prisma.post.create({
  //   data: {title: "Fifth Post"},
  // });

    // No Cursor Result
    const noCursorResult = await prisma.post.findMany({
      take: 4,
      orderBy: {
        LikedPeople: {count: "desc"}
      },
    });
    console.log(noCursorResult);
    const cursorResult = await prisma.post.findMany({
      cursor: {id: 1},
      skip: 1,
      take: 4,
      orderBy: {
        LikedPeople: {count: "desc"}
      }
    });
    console.log(cursorResult);
 
}

main();
