import { calcularIVA2,IProducto} from "./05-Desestructurar-Funciones";


    const carrito:IProducto[]=[
        {
        desc:'Telefono1',
        precio:899
        },
    {
        desc:'Telefono2',
        precio:400
    },
    {
        desc:'Telefono3',
        precio:798
    }
]
const [total,iva]=calcularIVA2(carrito);
console.log(`total: ${total}`);
console.log(`IVA: ${iva}`);
