const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const product = await prisma.product.create({
      data: {
        title: 'Test Product',
        category: 'remeras',
        price: 1000,
        description: 'Test description',
        images: '[]',
        isFeatured: false,
      },
    });
    console.log('SUCCESS_CREATED_PRODUCT_ID:', product.id);
    
    // Cleanup
    await prisma.product.delete({
      where: { id: product.id },
    });
    console.log('SUCCESS_DELETED_TEST_PRODUCT');
  } catch (error) {
    console.error('TEST_ERROR:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
