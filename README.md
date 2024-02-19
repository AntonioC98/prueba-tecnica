## Parte 1 Tecnica

  # prueba-tecnica-jacm
  # Instalación y ejecución
  * 1.- Descargar o clonar la carpeta prueba-tecnica-jacm
  * 2.- Instalar Node JS de la siguiente ruta "https://nodejs.org/en/download", puede o no requerir agregar variables de entorno en su computadora, para configurar siga los pasos de la siguiente imagen
    ![image](https://github.com/AntonioC98/prueba-tecnica/assets/160462690/641977ec-8914-49e0-a598-1b0458e1c548)
  * 3.- Descargar VS Code de la siguiente liga "https://code.visualstudio.com/", abrir la carpeta prueba-tecnica-jacm, abrir una terminal dentro de VS Code y ejecutar el siguiente comando "npm i"
  * 4.- Ejecutar el comando "npm run ng serve" para levantar el proyecto y poder visualizarlo generalmente en la siguiente ruta "localhost:4200"
  
  # Notas del proyecto
  * 1.- Esta implementada la tecnologica Lazy Loading para la modularización del proyecto.
  * 2.- Esta implementada la tecnologia NGRX para ejecutar peticiones y guardar el estado de la aplicacion si se da F5 la información consultada persiste.
  * 3.- Esta implementada una variante de MVC la cual utiliza componentes y containers donde los componentes solo muestran la información y los containers se encargan de prepararla para la vista, esto adicionalmente a la capa que NGRX
      brinda para el control y manejo de las peticiones y estados de la APP.
  * 4.- Esta implementado en la carpeta Shared un ejemplo de un componente generico el cual esta diseñado para separar angular material o cualquier implementacion de otra libreria de nuestro proyecto por si en un futuro se desea migrar
      de libreria sea mas facil y tambien ayuda para estandarizar la implementación de los componentes de nuesta APP (por cuestiones de tiempo solo se creo el componente de button pero esto se puede hacer con cada componente de Angular    
      Material).
  * 5.- Las pruebas unitarias unicamente estan implementadas en los archivos user-list.component.spec.ts y user-list-container.component.ts por motivos de tiempo.
  * 6.- Las variables, notas y nombres de metodos se encuentran enteramente en ingles por estandar de programación asi como la documentación del mismo.

## Parte 2 Teorica

  ## 1. Angular:
  
  * ¿Qué es Angular y cuál es su propósito principal en el desarrollo web?
  * R = Angular es un framework para desarrollo de paginas web donde podemos crear paginas dinamicas, eficientes y altamante personalizables.
  
  * Explica la diferencia entre AngularJS y Angular.
  * R = AngularJs es una primera versión de Angular donde se usa solamente JavaScript con una estructura MVC y Angular son todas las versiones posteriores "2+" donde se implementa typescript y se basa en una estructura de componentes y 
  servicios.
  
  * ¿Qué es un componente en Angular y cómo se crea uno?
  * R = Un componente es un bloque de construcción de la pagina web que contempla la clase componente que define los datos y la logica y el templete que es basicamente el HTML en el cual se visualiza la pagina y un componente se
  puede crear de dos maneras principales, mediante el comando "ng generate component nombre-componente" o creando los archivos manualmente uno a uno siguiendo la estructura base, este ultimo con un paso extra en el cual tenemos que 
  agregar el import en el modulo manualmente para darlo de alta-
  
  * ¿Cuál es la diferencia entre ngOnInit() y constructor() en Angular?
  * R = El constructor sirve para inyección de dependencias o servicios, como lo dice su propio nombre, es lo primero que se ejecuta para poder crear o construir lo minimo necesario para nuestro componente y el ngOnInit es parte del ciclo de vida del componente donde podemos inicializar la logica ya que cuando este se ejecuta ya se crearon los enlaces de datos del componente.
  
  ## 2. HTML5:
  
  * ¿Cuáles son algunas de las nuevas características introducidas en HTML5?
  * R = Graficos de canvas, multimedia (audio y video) WebSockets y la que para mi es la mas importante, almacenamiento web (LocalStorage y SesionStorage)
  
  * Describe la diferencia entre las etiquetas <div> y <span>.
  * R = un DIV es un elemento de bloque y sirve para agrupar secciones mas grandes y es mas util para aplicar estlos CSS mas facilmente 
  
  * ¿Qué son los atributos data- en HTML5 y para qué se utilizan?
  * R = Los atributos data son una forma de almacenar informacion adicional en los elemetos HTML los cuales son accesibles de manera sencilla con JavaScript
  
  ## 3. CSS/Sass:
  
  * ¿Qué es Sass y cuál es su ventaja sobre CSS convencional?
  * R = Es un lenguaje de hoja de estilos que permite crear y usar variables, anidamientos, mixins, facilitando la escritura, mantenibilidad y reutilización de estilos, se podria decir que es logica de programación aplicada a estilos
  
  * Explica la diferencia entre @import y @use en Sass.
  * R = @import y @use se pueden utilizar de la misma manera pero @use es mas adecuado para encapsulación de estilos para evitar conflictos con otros estilos, no se puede duplicar por mas veces que se llame al mismo archivo.
  
  * ¿Qué es BEM y cómo puede mejorar la estructura y mantenimiento del código CSS?
  
  ## 4. JavaScript / TypeScript:
  
  * ¿Cuál es la diferencia entre JavaScript y TypeScript?
  * R = JavaSscript usa tipado dinamico y typescript usa tipado estatico, typescript esta diseñado para facilitar el desarrollo de aplicaciones grandes y complejas brindando donde la claridad y escalabilidad son pilares
  
  * ¿Qué son los tipos en TypeScript y cómo pueden mejorar el desarrollo de aplicaciones web?
  Explica cómo se declara una variable en JavaScript y en TypeScript.
  * R = Los tipos en Typescript son una herramienta indispensable ya que permite crear codigo mas predecible y menos propenso a errores, esto mejora la deteccion temprana de errores, autocompletado para facil codificación,
  programación mas segura y mantenible y ayuda a optimizar el codigo.
  
  * Una variable de TyeScript se declararia de la siguiente manera:
  * const nombreVariable: String; // Variable tipo texto 

  * Una variable de Javascript se declararia de la siguiente manera:
  * var nombreVariable = 'Variable tipo texto'
  
  ## 5. Sistema de Gestión de Paquetes (npm):
  
  * ¿Qué es npm y cuál es su función en el desarrollo de aplicaciones web?
  * R = Es uns sitema de gestion de paquetes, permite instalar o actualizar bibliotecas facilmente, permite compartir librerias entre desarrolladores y nos permite controlar las versiones de las librerias que usemos.
  
  * Describe el proceso para instalar un paquete npm en un proyecto.
  * R= Actualmente es muy facil instalar un paquete en un proyecto, podemos hacerlo de varias maneras:
    * 1.- Agregar la libreria y la version que necesitamos en nuestro package.json y ejecutar el comando "npm i" en la terminal, esto instalara todas las liberias especificadas en ese archivo
    * 2.- Ejecutar el comando de instalacion especifica pr esa liberia, mediante el comando "npm i libreria@1.1.0" podemos instalar la libreria y la version que deseemos, ademas este comando agregara esa libreria automaticamente a 
        nuestro archvo package.json
  
  ## 6. Integración e Implementación de APIs y WebSocket :
  
  * Explica qué es una API y cómo se utiliza en el desarrollo web.
  * R = Un API es un conjunto de reglas y protocolos que define como deben de interactuar los componentes o sistemas entre si, se utiliza en desarrollo web para la comunicacion entre el BackEnd y el FrontEnd para que estos puedan
      Compartirse información, la manera mas comun son el uso de APIs RESTful basado en HTTP
  
  * ¿Qué es JSON y cuál es su relación con las APIs REST?
  * R = Un JSON es un formato de intercambio de datos de facil entendimiento y es fundamental en el uso de APIs REST ya que es el formato de intercambio de datos entre el cliente y el servidor.
  
  * Describe el proceso para realizar una solicitud GET a una API REST utilizando JavaScript/TypeScript.
  * R = Para realizar una peticion GET tenemos que injectar la clase HttpClient en el constructor de nuestro servicio, una vez que este inectado podremos usarlo en un metodo, haremos el llamado con un "this.http.get" para indicar
    que vamos a hacer uso del HttpClient y del tipo de peticion GET, posteriormente entre parentesis indicaremos la ruta a donde se dirigira la peticion, como adicional podemos definir el tipo de respuesta  agreegando los siguientes
    elementos "<>" de tal manera que para TypeScript el llamado a un API RESt se veria de la siguiente manera:

          import { Injectable } from "@angular/core";
          import { HttpClient } from '@angular/common/http';
          import { Observable } from "rxjs";
          import { UserEntity } from "../entity/user.entity";
          
          @Injectable({ providedIn: 'root' })
          export class UserApiService {
            constructor(protected http: HttpClient) { }
          
            /**
             * Service used to call the user list from jsonplaceholder
             * @returns Return a UserEntity list with the information
             */
            getUserList(): Observable<Array<UserEntity>> {
              return this.http.get<Array<UserEntity>>('https://jsonplaceholder.typicode.com/users');
            }
          }

    * NOTA: Fragmento sacado de la prueba tecnica realizada anteriormente
  
  * Descripbe como integrarias un WebSocket
  * R = Un WebSocket se integraria de la siguiente manera en TypeScript:
    * 1.- Crearia las variables de tipo WebSocket y Subject
    * 2.- Inicializaria el webSocket pasando de parametro la URL que consultara
    * 3.- Inicializaria el Subject con un valor vacio
    * 4.- Dentro del evento onmessage del socket definiria el "this.subject.next(event);" para registrar cada respuesta del socket y disparar un evento
    * 5.- suscribiria el socket para que este empiece la comunicación

            private socket: WebSocket | undefined;
            private subject: Subject<MessageEvent> = new Subject<MessageEvent>();

            connect(url: string): Subject<MessageEvent> {
              if (!this.subject) {
                this.socket = new WebSocket(url);
                this.subject = new Subject<MessageEvent>();
                this.socket.onmessage = event => {
                  this.subject.next(event);
                };
              }
              return this.subject;
            }

            suscriber() {
              const websocketObservable = this.websocketService.connect('url.prueba');
              websocketObservable.subscribe({
                next: (messageEvent: MessageEvent) => {
                  // Registro de respuesta
                }
              });
            }

    * NOTA: Codigo ejemplo     
  
  ## 7. Patrón MVC:
  
  * Define el patrón de diseño Modelo-Vista-Controlador (MVC) y explica sus componentes.
  * R = Es un patron arquitectonico que separa la aplicación en 3 componentes, el Modelo que repesenta la estructura de los datos y la logica de negocio, la Vista es la repesetación visual de los datos que es basicamente lo que el
      usuario ve y con lo que puede interactual y el Controlador que es el intermediario entre el Modelo y la Vista, recibe entradas mayormente del teclado o raton y se encarga de realizar peticiones si son necesarias
  
  * ¿Cuál es la ventaja de utilizar el patrón MVC en el desarrollo de aplicaciones web?
  * R = Permite independencia entre componentes, permite reutilizar codigo mas facilmente, es mas escalable
  
  ## 8. Desarrollo de Pruebas Unitarias e Integración (Jasmine y Karma):
  
  * ¿Qué son las pruebas unitarias y por qué son importantes en el desarrollo de software?
  * R = Son pruebas que se realizan en la escala mas pequeña del codigo, que puede ser una funsion, metodo o clase. Son importantes ya que ayudan a la detección temprana de errores, ayuda a mejorar la calidad del codigo, son una
      forma de documentación del sistema y se pueden automatizar para integrarlas en pipelines de integracion continua (Azure DevOps por ejemplo)
  
  * Explica la diferencia entre las pruebas unitarias y las pruebas de integración.
  * R = Las pruebas unitarias verifican la funcionalidad de metodos y unidades individuales de codigo y las pruebas de integracion evaluan el funcionamiento de diferentes modulos trabajando en conjunto.
  
  * Describe cómo se configura y ejecuta un conjunto de pruebas Jasmine utilizando Karma en un proyecto Angular.
  * R = 1.- Se define el nombre del conjunto de pruebas
      2.- Se importan los modulos necesarios para que el codigo que vamos aprobar pueda funcionar
      3.- Se crean casos de uso llamados "it" para probar los diferentes pedazos de codigo
      4.- Se crean "spy" o espias para atrapar las peticiones que intenten salir de nuestro archivo de pruebas para intentar comunicarse con otros archivos
      5.- Se agregan validaciones para ver que los espias hayan atrapado las peticiones que debieron lanzarse (esto ultimo pueden ser validaciones a espias, valors de variables, etc)


      import { ComponentFixture, TestBed } from '@angular/core/testing';
      import { UserListComponent } from './user-list.component';
      import { MatTableModule } from '@angular/material/table';
      import { MatPaginatorModule } from '@angular/material/paginator';
      import { NoopAnimationsModule } from '@angular/platform-browser/animations';
      import { of } from 'rxjs';
      import { UserModel } from '../../data-access/model/user.model';
      
      describe('UserListComponent', () => {
        let component: UserListComponent;
        let fixture: ComponentFixture<UserListComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [UserListComponent],
            imports: [
              MatTableModule,
              MatPaginatorModule,
              NoopAnimationsModule
            ]
          })
            .compileComponents();
        });
      
        beforeEach(() => {
          fixture = TestBed.createComponent(UserListComponent);
          component = fixture.componentInstance;
      
          component.listUserModel$ = of(new Array<UserModel>());
          fixture.detectChanges();
        });
      
        it('should create', () => {
          expect(component).toBeTruthy();
        });
      
        it('should filter the data based on the filter value', () => {
          const filterValue = 'test';
          component.searchByName({ target: { value: filterValue } } as unknown as Event);
          expect(component.dataSource.filter).toBe(filterValue.trim());
        });
      
        it('should navigate to detail when viewDetail is called', () => {
          const userModel = new UserModel();
          spyOn(component.viewDetailEvent, 'emit');
      
          component.viewDetail(userModel);
      
          expect(component.viewDetailEvent.emit).toHaveBeenCalledWith(userModel);
        });
      });

NOTA: Fragmento de codigo de la prueba tecnica realizada anteriormente
  
