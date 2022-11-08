const fs = require("fs");
// -------Opcion 1
// class Contenedor {
//     async save(obj) {
//         try {
//             fs.accessSync("./products.txt", fs.constants.F_OK);

//             const data = await fs.promises.readFile("products.txt", "utf-8");

//             if (data.length > 0) {
//                 const id = parseInt(
//                     data.slice(
//                         data.lastIndexOf("Id:") + 3,
//                         data.lastIndexOf("Title:") - 1
//                     )
//                 );

//                 fs.promises.appendFile(
//                     "products.txt",
//                     `Id:${parseInt(id + 1)} Title:${obj.title} Price:${
//                         obj.price
//                     } //`
//                 );
//             } else {
//                 fs.promises.appendFile(
//                     "products.txt",
//                     `Id:${0} Title:${obj.title} Price:${obj.price} //`
//                 );
//             }
//         } catch (error) {
//             fs.promises.appendFile(
//                 "products.txt",
//                 `Id:0 Title:${obj.title} Price:${obj.price} //`
//             );
//         }
//     }

//     async getById(id) {
//         const data = await fs.promises.readFile("products.txt", "utf-8");

//         const auxData = data.slice(data.lastIndexOf(`Id:${id}`));

//         const data2 = auxData.indexOf("//");

//         data.search(`Id:${id}`) == -1
//             ? console.log("El id ingresado no existe")
//             : console.log(auxData.slice(0, data2));
//     }

//     async getAll() {
//         const allData = await fs.promises.readFile("products.txt", "utf-8");
//         console.log(allData);
//     }

//     async deleteById(id) {
//         const data = await fs.promises.readFile("products.txt", "utf-8");

//         const auxData = data.slice(data.lastIndexOf(`Id:${id}`));

//         if (data.search(`Id:${id}`) != -1) {
//             const data2 = auxData.indexOf("//") + 2;

//             const newData = data.split(auxData.slice(0, data2)).join("");

//             await fs.writeFileSync("products.txt", newData);

//             console.log(`se elimino el objeto con Id:${id}`);
//         } else {
//             console.log("el id ingresado no existe");
//         }
//     }

//     async deleteAll() {
//         await fs.writeFileSync("products.txt", "");
//     }
// }

// const Prueba = new Contenedor();

// Prueba.save({ title: "cafe-moka", price: "240" });
// Prueba.save({ title: "cappucino", price: "200" });
// Prueba.save({ title: "americano", price: "150" });
// Prueba.getById(2);
// Prueba.getAll();
// Prueba.deleteAll();
// Prueba.deleteById(10);

// Prueba.deleteAll();

//-----------------------------------------------opcion 2

class Contenedor {
    async save(obj) {
        try {
            if (
                fs.accessSync("./products.txt", fs.constants.F_OK) === undefined
            ) {
                const DATA = await fs.promises.readFile(
                    "products.txt",
                    "utf-8"
                );

                let id = parseInt(
                    DATA.slice(
                        DATA.lastIndexOf("Id:") + 3,
                        DATA.lastIndexOf("Title:") - 1
                    )
                );

                if (id >= 1) {
                    let newData = DATA.slice(0, DATA.length - 1);

                    await fs.writeFileSync(
                        "products.txt",
                        newData +
                            `
{
Id:${parseInt(id + 1)}
Title:${obj.title}
Price:${obj.price} 
},

]`
                    );
                } else {
                    fs.promises.appendFile(
                        "products.txt",
                        `[

{
Id:${parseInt(1)}
Title:${obj.title}
Price:${obj.price} 
},

]`
                    );
                }
            }
        } catch (error) {
            console.log(
                `${error} el archivo products.txt no existe, ahora ah sido creado`
            );
            await fs.writeFileSync("products.txt", "");
        }
    }

    async getById(id) {
        try {
            const data = await fs.promises.readFile("products.txt", "utf-8");

            const auxData = data.slice(data.lastIndexOf(`Id:${id}`));

            const data2 = auxData.indexOf("}");

            data.search(`Id:${id}`) == -1
                ? console.log("El id ingresado no existe")
                : console.log(auxData.slice(0, data2));
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const allData = await fs.promises.readFile("products.txt", "utf-8");
            console.log(allData);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            await fs.writeFileSync("products.txt", "");
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const data = await fs.promises.readFile("products.txt", "utf-8");

            const ubiacion1 = data.search(`Id:${id}`);

            if (ubiacion1 == -1) {
                console.log("el id ingresado no existe");
            } else {
                const newUbicaion1 = data.slice(ubiacion1 - 2);

                const ubicacion2 = newUbicaion1.indexOf("},");

                const newUbicacion2 = newUbicaion1.slice(
                    newUbicaion1,
                    ubicacion2 + 2
                );

                const newData = data.replace(newUbicacion2, "");

                const newData2 = newData.replace(
                    `,





`,
                    `,
            

`
                );

                await fs.writeFileSync("products.txt", newData2);
                console.log(ubiacion1);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const Prueba = new Contenedor();
// Prueba.save({ title: "cafe-moka", price: "240" });
// Prueba.save({ title: "cappucino", price: "200" });
// Prueba.save({ title: "americano", price: "150" });
// Prueba.getById(2);
// Prueba.getAll();
// Prueba.deleteById(2);
// Prueba.deleteAll();
