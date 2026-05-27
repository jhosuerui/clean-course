(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {

        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private masterEmail = 'jrui@queteimporta.com';

        public sendEmail(emailList: string[], template: 'to-clients' | 'to-admins' | 'to-suppliers'){
            console.log('Enviando correo a los ', template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService:ProductService, mailer: Mailer){
            this.productService=productService;
            this.mailer=mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['otro@google.com'],'to-clients');
        }

    }

    class CartBlock {
        private itemsInCart: Object[] = [];
        AddToCart(productId: number) {
            console.log('Agregando al carrito ', productId);
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer()

    const productBloc = new ProductBloc(productService,mailer);
    const cartBlock = new CartBlock();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBlock.AddToCart(10);








})();