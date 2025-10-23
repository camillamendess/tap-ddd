
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>
/**
 * Model Seller
 * 
 */
export type Seller = $Result.DefaultSelection<Prisma.$SellerPayload>
/**
 * Model Operator
 * 
 */
export type Operator = $Result.DefaultSelection<Prisma.$OperatorPayload>
/**
 * Model Catalog
 * 
 */
export type Catalog = $Result.DefaultSelection<Prisma.$CatalogPayload>
/**
 * Model CatalogItem
 * 
 */
export type CatalogItem = $Result.DefaultSelection<Prisma.$CatalogItemPayload>
/**
 * Model WorkAssignment
 * 
 */
export type WorkAssignment = $Result.DefaultSelection<Prisma.$WorkAssignmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operations
 * const operations = await prisma.operation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Operations
   * const operations = await prisma.operation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seller`: Exposes CRUD operations for the **Seller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.seller.findMany()
    * ```
    */
  get seller(): Prisma.SellerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operator`: Exposes CRUD operations for the **Operator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operators
    * const operators = await prisma.operator.findMany()
    * ```
    */
  get operator(): Prisma.OperatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalog`: Exposes CRUD operations for the **Catalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogs
    * const catalogs = await prisma.catalog.findMany()
    * ```
    */
  get catalog(): Prisma.CatalogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalogItem`: Exposes CRUD operations for the **CatalogItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CatalogItems
    * const catalogItems = await prisma.catalogItem.findMany()
    * ```
    */
  get catalogItem(): Prisma.CatalogItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workAssignment`: Exposes CRUD operations for the **WorkAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkAssignments
    * const workAssignments = await prisma.workAssignment.findMany()
    * ```
    */
  get workAssignment(): Prisma.WorkAssignmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Operation: 'Operation',
    Seller: 'Seller',
    Operator: 'Operator',
    Catalog: 'Catalog',
    CatalogItem: 'CatalogItem',
    WorkAssignment: 'WorkAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "operation" | "seller" | "operator" | "catalog" | "catalogItem" | "workAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
          }
        }
      }
      Seller: {
        payload: Prisma.$SellerPayload<ExtArgs>
        fields: Prisma.SellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findFirst: {
            args: Prisma.SellerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findMany: {
            args: Prisma.SellerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          create: {
            args: Prisma.SellerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          createMany: {
            args: Prisma.SellerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          delete: {
            args: Prisma.SellerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          update: {
            args: Prisma.SellerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          deleteMany: {
            args: Prisma.SellerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          upsert: {
            args: Prisma.SellerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          aggregate: {
            args: Prisma.SellerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeller>
          }
          groupBy: {
            args: Prisma.SellerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerCountArgs<ExtArgs>
            result: $Utils.Optional<SellerCountAggregateOutputType> | number
          }
        }
      }
      Operator: {
        payload: Prisma.$OperatorPayload<ExtArgs>
        fields: Prisma.OperatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findFirst: {
            args: Prisma.OperatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findMany: {
            args: Prisma.OperatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          create: {
            args: Prisma.OperatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          createMany: {
            args: Prisma.OperatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          delete: {
            args: Prisma.OperatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          update: {
            args: Prisma.OperatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          deleteMany: {
            args: Prisma.OperatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          upsert: {
            args: Prisma.OperatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          aggregate: {
            args: Prisma.OperatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperator>
          }
          groupBy: {
            args: Prisma.OperatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatorCountArgs<ExtArgs>
            result: $Utils.Optional<OperatorCountAggregateOutputType> | number
          }
        }
      }
      Catalog: {
        payload: Prisma.$CatalogPayload<ExtArgs>
        fields: Prisma.CatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          findFirst: {
            args: Prisma.CatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          findMany: {
            args: Prisma.CatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>[]
          }
          create: {
            args: Prisma.CatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          createMany: {
            args: Prisma.CatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>[]
          }
          delete: {
            args: Prisma.CatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          update: {
            args: Prisma.CatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          deleteMany: {
            args: Prisma.CatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>[]
          }
          upsert: {
            args: Prisma.CatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          aggregate: {
            args: Prisma.CatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalog>
          }
          groupBy: {
            args: Prisma.CatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogCountAggregateOutputType> | number
          }
        }
      }
      CatalogItem: {
        payload: Prisma.$CatalogItemPayload<ExtArgs>
        fields: Prisma.CatalogItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          findFirst: {
            args: Prisma.CatalogItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          findMany: {
            args: Prisma.CatalogItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>[]
          }
          create: {
            args: Prisma.CatalogItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          createMany: {
            args: Prisma.CatalogItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>[]
          }
          delete: {
            args: Prisma.CatalogItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          update: {
            args: Prisma.CatalogItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          deleteMany: {
            args: Prisma.CatalogItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>[]
          }
          upsert: {
            args: Prisma.CatalogItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          aggregate: {
            args: Prisma.CatalogItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalogItem>
          }
          groupBy: {
            args: Prisma.CatalogItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogItemCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogItemCountAggregateOutputType> | number
          }
        }
      }
      WorkAssignment: {
        payload: Prisma.$WorkAssignmentPayload<ExtArgs>
        fields: Prisma.WorkAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>
          }
          findFirst: {
            args: Prisma.WorkAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>
          }
          findMany: {
            args: Prisma.WorkAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>[]
          }
          create: {
            args: Prisma.WorkAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>
          }
          createMany: {
            args: Prisma.WorkAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>[]
          }
          delete: {
            args: Prisma.WorkAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>
          }
          update: {
            args: Prisma.WorkAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.WorkAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.WorkAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkAssignmentPayload>
          }
          aggregate: {
            args: Prisma.WorkAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkAssignment>
          }
          groupBy: {
            args: Prisma.WorkAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<WorkAssignmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    operation?: OperationOmit
    seller?: SellerOmit
    operator?: OperatorOmit
    catalog?: CatalogOmit
    catalogItem?: CatalogItemOmit
    workAssignment?: WorkAssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OperationCountOutputType
   */

  export type OperationCountOutputType = {
    sellers: number
  }

  export type OperationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | OperationCountOutputTypeCountSellersArgs
  }

  // Custom InputTypes
  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationCountOutputType
     */
    select?: OperationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeCountSellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerWhereInput
  }


  /**
   * Count Type SellerCountOutputType
   */

  export type SellerCountOutputType = {
    operators: number
    catalogs: number
  }

  export type SellerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operators?: boolean | SellerCountOutputTypeCountOperatorsArgs
    catalogs?: boolean | SellerCountOutputTypeCountCatalogsArgs
  }

  // Custom InputTypes
  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerCountOutputType
     */
    select?: SellerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeCountOperatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorWhereInput
  }

  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeCountCatalogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogWhereInput
  }


  /**
   * Count Type OperatorCountOutputType
   */

  export type OperatorCountOutputType = {
    WorkAssignment: number
  }

  export type OperatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkAssignment?: boolean | OperatorCountOutputTypeCountWorkAssignmentArgs
  }

  // Custom InputTypes
  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorCountOutputType
     */
    select?: OperatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountWorkAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkAssignmentWhereInput
  }


  /**
   * Count Type CatalogCountOutputType
   */

  export type CatalogCountOutputType = {
    items: number
    WorkAssignment: number
  }

  export type CatalogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CatalogCountOutputTypeCountItemsArgs
    WorkAssignment?: boolean | CatalogCountOutputTypeCountWorkAssignmentArgs
  }

  // Custom InputTypes
  /**
   * CatalogCountOutputType without action
   */
  export type CatalogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogCountOutputType
     */
    select?: CatalogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CatalogCountOutputType without action
   */
  export type CatalogCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogItemWhereInput
  }

  /**
   * CatalogCountOutputType without action
   */
  export type CatalogCountOutputTypeCountWorkAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    status: string | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    status: string | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    name: number
    date: number
    status: number
    _all: number
  }


  export type OperationMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    status?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    status?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    status?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    id: string
    name: string
    date: Date
    status: string
    _count: OperationCountAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    status?: boolean
    sellers?: boolean | Operation$sellersArgs<ExtArgs>
    _count?: boolean | OperationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    status?: boolean
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    status?: boolean
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    status?: boolean
  }

  export type OperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "status", ExtArgs["result"]["operation"]>
  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | Operation$sellersArgs<ExtArgs>
    _count?: boolean | OperationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      sellers: Prisma.$SellerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      status: string
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations and returns the data updated in the database.
     * @param {OperationUpdateManyAndReturnArgs} args - Arguments to update many Operations.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellers<T extends Operation$sellersArgs<ExtArgs> = {}>(args?: Subset<T, Operation$sellersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operation model
   */
  interface OperationFieldRefs {
    readonly id: FieldRef<"Operation", 'String'>
    readonly name: FieldRef<"Operation", 'String'>
    readonly date: FieldRef<"Operation", 'DateTime'>
    readonly status: FieldRef<"Operation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation updateManyAndReturn
   */
  export type OperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to delete.
     */
    limit?: number
  }

  /**
   * Operation.sellers
   */
  export type Operation$sellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    where?: SellerWhereInput
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    cursor?: SellerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
  }


  /**
   * Model Seller
   */

  export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  export type SellerMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    operationId: string | null
  }

  export type SellerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    operationId: string | null
  }

  export type SellerCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    operationId: number
    _all: number
  }


  export type SellerMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    operationId?: true
  }

  export type SellerMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    operationId?: true
  }

  export type SellerCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    operationId?: true
    _all?: true
  }

  export type SellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seller to aggregate.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sellers
    **/
    _count?: true | SellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerMaxAggregateInputType
  }

  export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeller[P]>
      : GetScalarType<T[P], AggregateSeller[P]>
  }




  export type SellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerWhereInput
    orderBy?: SellerOrderByWithAggregationInput | SellerOrderByWithAggregationInput[]
    by: SellerScalarFieldEnum[] | SellerScalarFieldEnum
    having?: SellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerCountAggregateInputType | true
    _min?: SellerMinAggregateInputType
    _max?: SellerMaxAggregateInputType
  }

  export type SellerGroupByOutputType = {
    id: string
    name: string
    cpf: string
    operationId: string | null
    _count: SellerCountAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerGroupByOutputType[P]>
            : GetScalarType<T[P], SellerGroupByOutputType[P]>
        }
      >
    >


  export type SellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    operationId?: boolean
    Operation?: boolean | Seller$OperationArgs<ExtArgs>
    operators?: boolean | Seller$operatorsArgs<ExtArgs>
    catalogs?: boolean | Seller$catalogsArgs<ExtArgs>
    _count?: boolean | SellerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    operationId?: boolean
    Operation?: boolean | Seller$OperationArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    operationId?: boolean
    Operation?: boolean | Seller$OperationArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    operationId?: boolean
  }

  export type SellerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "operationId", ExtArgs["result"]["seller"]>
  export type SellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Operation?: boolean | Seller$OperationArgs<ExtArgs>
    operators?: boolean | Seller$operatorsArgs<ExtArgs>
    catalogs?: boolean | Seller$catalogsArgs<ExtArgs>
    _count?: boolean | SellerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SellerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Operation?: boolean | Seller$OperationArgs<ExtArgs>
  }
  export type SellerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Operation?: boolean | Seller$OperationArgs<ExtArgs>
  }

  export type $SellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seller"
    objects: {
      Operation: Prisma.$OperationPayload<ExtArgs> | null
      operators: Prisma.$OperatorPayload<ExtArgs>[]
      catalogs: Prisma.$CatalogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      operationId: string | null
    }, ExtArgs["result"]["seller"]>
    composites: {}
  }

  type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = $Result.GetResult<Prisma.$SellerPayload, S>

  type SellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerCountAggregateInputType | true
    }

  export interface SellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seller'], meta: { name: 'Seller' } }
    /**
     * Find zero or one Seller that matches the filter.
     * @param {SellerFindUniqueArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerFindUniqueArgs>(args: SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerFindUniqueOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerFindFirstArgs>(args?: SelectSubset<T, SellerFindFirstArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.seller.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.seller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerWithIdOnly = await prisma.seller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerFindManyArgs>(args?: SelectSubset<T, SellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seller.
     * @param {SellerCreateArgs} args - Arguments to create a Seller.
     * @example
     * // Create one Seller
     * const Seller = await prisma.seller.create({
     *   data: {
     *     // ... data to create a Seller
     *   }
     * })
     * 
     */
    create<T extends SellerCreateArgs>(args: SelectSubset<T, SellerCreateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {SellerCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerCreateManyArgs>(args?: SelectSubset<T, SellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sellers and returns the data saved in the database.
     * @param {SellerCreateManyAndReturnArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seller.
     * @param {SellerDeleteArgs} args - Arguments to delete one Seller.
     * @example
     * // Delete one Seller
     * const Seller = await prisma.seller.delete({
     *   where: {
     *     // ... filter to delete one Seller
     *   }
     * })
     * 
     */
    delete<T extends SellerDeleteArgs>(args: SelectSubset<T, SellerDeleteArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seller.
     * @param {SellerUpdateArgs} args - Arguments to update one Seller.
     * @example
     * // Update one Seller
     * const seller = await prisma.seller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerUpdateArgs>(args: SelectSubset<T, SellerUpdateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {SellerDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.seller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerDeleteManyArgs>(args?: SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerUpdateManyArgs>(args: SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers and returns the data updated in the database.
     * @param {SellerUpdateManyAndReturnArgs} args - Arguments to update many Sellers.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SellerUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seller.
     * @param {SellerUpsertArgs} args - Arguments to update or create a Seller.
     * @example
     * // Update or create a Seller
     * const seller = await prisma.seller.upsert({
     *   create: {
     *     // ... data to create a Seller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seller we want to update
     *   }
     * })
     */
    upsert<T extends SellerUpsertArgs>(args: SelectSubset<T, SellerUpsertArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.seller.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends SellerCountArgs>(
      args?: Subset<T, SellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellerAggregateArgs>(args: Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>

    /**
     * Group by Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerGroupByArgs['orderBy'] }
        : { orderBy?: SellerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seller model
   */
  readonly fields: SellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Operation<T extends Seller$OperationArgs<ExtArgs> = {}>(args?: Subset<T, Seller$OperationArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    operators<T extends Seller$operatorsArgs<ExtArgs> = {}>(args?: Subset<T, Seller$operatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogs<T extends Seller$catalogsArgs<ExtArgs> = {}>(args?: Subset<T, Seller$catalogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seller model
   */
  interface SellerFieldRefs {
    readonly id: FieldRef<"Seller", 'String'>
    readonly name: FieldRef<"Seller", 'String'>
    readonly cpf: FieldRef<"Seller", 'String'>
    readonly operationId: FieldRef<"Seller", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seller findUnique
   */
  export type SellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findUniqueOrThrow
   */
  export type SellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findFirst
   */
  export type SellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findFirstOrThrow
   */
  export type SellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findMany
   */
  export type SellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Sellers to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller create
   */
  export type SellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to create a Seller.
     */
    data: XOR<SellerCreateInput, SellerUncheckedCreateInput>
  }

  /**
   * Seller createMany
   */
  export type SellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seller createManyAndReturn
   */
  export type SellerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seller update
   */
  export type SellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to update a Seller.
     */
    data: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
    /**
     * Choose, which Seller to update.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller updateMany
   */
  export type SellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
  }

  /**
   * Seller updateManyAndReturn
   */
  export type SellerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seller upsert
   */
  export type SellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The filter to search for the Seller to update in case it exists.
     */
    where: SellerWhereUniqueInput
    /**
     * In case the Seller found by the `where` argument doesn't exist, create a new Seller with this data.
     */
    create: XOR<SellerCreateInput, SellerUncheckedCreateInput>
    /**
     * In case the Seller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
  }

  /**
   * Seller delete
   */
  export type SellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter which Seller to delete.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller deleteMany
   */
  export type SellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sellers to delete
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to delete.
     */
    limit?: number
  }

  /**
   * Seller.Operation
   */
  export type Seller$OperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
  }

  /**
   * Seller.operators
   */
  export type Seller$operatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    where?: OperatorWhereInput
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    cursor?: OperatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Seller.catalogs
   */
  export type Seller$catalogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    where?: CatalogWhereInput
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    cursor?: CatalogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Seller without action
   */
  export type SellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
  }


  /**
   * Model Operator
   */

  export type AggregateOperator = {
    _count: OperatorCountAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  export type OperatorMinAggregateOutputType = {
    id: string | null
    name: string | null
    sellerId: string | null
  }

  export type OperatorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sellerId: string | null
  }

  export type OperatorCountAggregateOutputType = {
    id: number
    name: number
    sellerId: number
    _all: number
  }


  export type OperatorMinAggregateInputType = {
    id?: true
    name?: true
    sellerId?: true
  }

  export type OperatorMaxAggregateInputType = {
    id?: true
    name?: true
    sellerId?: true
  }

  export type OperatorCountAggregateInputType = {
    id?: true
    name?: true
    sellerId?: true
    _all?: true
  }

  export type OperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operator to aggregate.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operators
    **/
    _count?: true | OperatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatorMaxAggregateInputType
  }

  export type GetOperatorAggregateType<T extends OperatorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperator[P]>
      : GetScalarType<T[P], AggregateOperator[P]>
  }




  export type OperatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorWhereInput
    orderBy?: OperatorOrderByWithAggregationInput | OperatorOrderByWithAggregationInput[]
    by: OperatorScalarFieldEnum[] | OperatorScalarFieldEnum
    having?: OperatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatorCountAggregateInputType | true
    _min?: OperatorMinAggregateInputType
    _max?: OperatorMaxAggregateInputType
  }

  export type OperatorGroupByOutputType = {
    id: string
    name: string
    sellerId: string
    _count: OperatorCountAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  type GetOperatorGroupByPayload<T extends OperatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatorGroupByOutputType[P]>
            : GetScalarType<T[P], OperatorGroupByOutputType[P]>
        }
      >
    >


  export type OperatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sellerId?: boolean
    seller?: boolean | SellerDefaultArgs<ExtArgs>
    WorkAssignment?: boolean | Operator$WorkAssignmentArgs<ExtArgs>
    _count?: boolean | OperatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sellerId?: boolean
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sellerId?: boolean
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectScalar = {
    id?: boolean
    name?: boolean
    sellerId?: boolean
  }

  export type OperatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sellerId", ExtArgs["result"]["operator"]>
  export type OperatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerDefaultArgs<ExtArgs>
    WorkAssignment?: boolean | Operator$WorkAssignmentArgs<ExtArgs>
    _count?: boolean | OperatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }
  export type OperatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }

  export type $OperatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operator"
    objects: {
      seller: Prisma.$SellerPayload<ExtArgs>
      WorkAssignment: Prisma.$WorkAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sellerId: string
    }, ExtArgs["result"]["operator"]>
    composites: {}
  }

  type OperatorGetPayload<S extends boolean | null | undefined | OperatorDefaultArgs> = $Result.GetResult<Prisma.$OperatorPayload, S>

  type OperatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatorCountAggregateInputType | true
    }

  export interface OperatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operator'], meta: { name: 'Operator' } }
    /**
     * Find zero or one Operator that matches the filter.
     * @param {OperatorFindUniqueArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatorFindUniqueArgs>(args: SelectSubset<T, OperatorFindUniqueArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperatorFindUniqueOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatorFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatorFindFirstArgs>(args?: SelectSubset<T, OperatorFindFirstArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatorFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operators
     * const operators = await prisma.operator.findMany()
     * 
     * // Get first 10 Operators
     * const operators = await prisma.operator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatorWithIdOnly = await prisma.operator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatorFindManyArgs>(args?: SelectSubset<T, OperatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operator.
     * @param {OperatorCreateArgs} args - Arguments to create a Operator.
     * @example
     * // Create one Operator
     * const Operator = await prisma.operator.create({
     *   data: {
     *     // ... data to create a Operator
     *   }
     * })
     * 
     */
    create<T extends OperatorCreateArgs>(args: SelectSubset<T, OperatorCreateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operators.
     * @param {OperatorCreateManyArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatorCreateManyArgs>(args?: SelectSubset<T, OperatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operators and returns the data saved in the database.
     * @param {OperatorCreateManyAndReturnArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operators and only return the `id`
     * const operatorWithIdOnly = await prisma.operator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatorCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operator.
     * @param {OperatorDeleteArgs} args - Arguments to delete one Operator.
     * @example
     * // Delete one Operator
     * const Operator = await prisma.operator.delete({
     *   where: {
     *     // ... filter to delete one Operator
     *   }
     * })
     * 
     */
    delete<T extends OperatorDeleteArgs>(args: SelectSubset<T, OperatorDeleteArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operator.
     * @param {OperatorUpdateArgs} args - Arguments to update one Operator.
     * @example
     * // Update one Operator
     * const operator = await prisma.operator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatorUpdateArgs>(args: SelectSubset<T, OperatorUpdateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operators.
     * @param {OperatorDeleteManyArgs} args - Arguments to filter Operators to delete.
     * @example
     * // Delete a few Operators
     * const { count } = await prisma.operator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatorDeleteManyArgs>(args?: SelectSubset<T, OperatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatorUpdateManyArgs>(args: SelectSubset<T, OperatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators and returns the data updated in the database.
     * @param {OperatorUpdateManyAndReturnArgs} args - Arguments to update many Operators.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operators and only return the `id`
     * const operatorWithIdOnly = await prisma.operator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperatorUpdateManyAndReturnArgs>(args: SelectSubset<T, OperatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operator.
     * @param {OperatorUpsertArgs} args - Arguments to update or create a Operator.
     * @example
     * // Update or create a Operator
     * const operator = await prisma.operator.upsert({
     *   create: {
     *     // ... data to create a Operator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operator we want to update
     *   }
     * })
     */
    upsert<T extends OperatorUpsertArgs>(args: SelectSubset<T, OperatorUpsertArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorCountArgs} args - Arguments to filter Operators to count.
     * @example
     * // Count the number of Operators
     * const count = await prisma.operator.count({
     *   where: {
     *     // ... the filter for the Operators we want to count
     *   }
     * })
    **/
    count<T extends OperatorCountArgs>(
      args?: Subset<T, OperatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatorAggregateArgs>(args: Subset<T, OperatorAggregateArgs>): Prisma.PrismaPromise<GetOperatorAggregateType<T>>

    /**
     * Group by Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatorGroupByArgs['orderBy'] }
        : { orderBy?: OperatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operator model
   */
  readonly fields: OperatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends SellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerDefaultArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    WorkAssignment<T extends Operator$WorkAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Operator$WorkAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operator model
   */
  interface OperatorFieldRefs {
    readonly id: FieldRef<"Operator", 'String'>
    readonly name: FieldRef<"Operator", 'String'>
    readonly sellerId: FieldRef<"Operator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Operator findUnique
   */
  export type OperatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findUniqueOrThrow
   */
  export type OperatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findFirst
   */
  export type OperatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findFirstOrThrow
   */
  export type OperatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findMany
   */
  export type OperatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operators to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator create
   */
  export type OperatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Operator.
     */
    data: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
  }

  /**
   * Operator createMany
   */
  export type OperatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operator createManyAndReturn
   */
  export type OperatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operator update
   */
  export type OperatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Operator.
     */
    data: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
    /**
     * Choose, which Operator to update.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator updateMany
   */
  export type OperatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to update.
     */
    limit?: number
  }

  /**
   * Operator updateManyAndReturn
   */
  export type OperatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operator upsert
   */
  export type OperatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Operator to update in case it exists.
     */
    where: OperatorWhereUniqueInput
    /**
     * In case the Operator found by the `where` argument doesn't exist, create a new Operator with this data.
     */
    create: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
    /**
     * In case the Operator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
  }

  /**
   * Operator delete
   */
  export type OperatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter which Operator to delete.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator deleteMany
   */
  export type OperatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operators to delete
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to delete.
     */
    limit?: number
  }

  /**
   * Operator.WorkAssignment
   */
  export type Operator$WorkAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    where?: WorkAssignmentWhereInput
    orderBy?: WorkAssignmentOrderByWithRelationInput | WorkAssignmentOrderByWithRelationInput[]
    cursor?: WorkAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkAssignmentScalarFieldEnum | WorkAssignmentScalarFieldEnum[]
  }

  /**
   * Operator without action
   */
  export type OperatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
  }


  /**
   * Model Catalog
   */

  export type AggregateCatalog = {
    _count: CatalogCountAggregateOutputType | null
    _min: CatalogMinAggregateOutputType | null
    _max: CatalogMaxAggregateOutputType | null
  }

  export type CatalogMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    sellerId: string | null
  }

  export type CatalogMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    sellerId: string | null
  }

  export type CatalogCountAggregateOutputType = {
    id: number
    name: number
    type: number
    sellerId: number
    _all: number
  }


  export type CatalogMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    sellerId?: true
  }

  export type CatalogMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    sellerId?: true
  }

  export type CatalogCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    sellerId?: true
    _all?: true
  }

  export type CatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalog to aggregate.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Catalogs
    **/
    _count?: true | CatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogMaxAggregateInputType
  }

  export type GetCatalogAggregateType<T extends CatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalog[P]>
      : GetScalarType<T[P], AggregateCatalog[P]>
  }




  export type CatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogWhereInput
    orderBy?: CatalogOrderByWithAggregationInput | CatalogOrderByWithAggregationInput[]
    by: CatalogScalarFieldEnum[] | CatalogScalarFieldEnum
    having?: CatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogCountAggregateInputType | true
    _min?: CatalogMinAggregateInputType
    _max?: CatalogMaxAggregateInputType
  }

  export type CatalogGroupByOutputType = {
    id: string
    name: string
    type: string
    sellerId: string
    _count: CatalogCountAggregateOutputType | null
    _min: CatalogMinAggregateOutputType | null
    _max: CatalogMaxAggregateOutputType | null
  }

  type GetCatalogGroupByPayload<T extends CatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogGroupByOutputType[P]>
        }
      >
    >


  export type CatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    sellerId?: boolean
    seller?: boolean | SellerDefaultArgs<ExtArgs>
    items?: boolean | Catalog$itemsArgs<ExtArgs>
    WorkAssignment?: boolean | Catalog$WorkAssignmentArgs<ExtArgs>
    _count?: boolean | CatalogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalog"]>

  export type CatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    sellerId?: boolean
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalog"]>

  export type CatalogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    sellerId?: boolean
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalog"]>

  export type CatalogSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    sellerId?: boolean
  }

  export type CatalogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "sellerId", ExtArgs["result"]["catalog"]>
  export type CatalogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerDefaultArgs<ExtArgs>
    items?: boolean | Catalog$itemsArgs<ExtArgs>
    WorkAssignment?: boolean | Catalog$WorkAssignmentArgs<ExtArgs>
    _count?: boolean | CatalogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CatalogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }
  export type CatalogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }

  export type $CatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Catalog"
    objects: {
      seller: Prisma.$SellerPayload<ExtArgs>
      items: Prisma.$CatalogItemPayload<ExtArgs>[]
      WorkAssignment: Prisma.$WorkAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      sellerId: string
    }, ExtArgs["result"]["catalog"]>
    composites: {}
  }

  type CatalogGetPayload<S extends boolean | null | undefined | CatalogDefaultArgs> = $Result.GetResult<Prisma.$CatalogPayload, S>

  type CatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogCountAggregateInputType | true
    }

  export interface CatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Catalog'], meta: { name: 'Catalog' } }
    /**
     * Find zero or one Catalog that matches the filter.
     * @param {CatalogFindUniqueArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogFindUniqueArgs>(args: SelectSubset<T, CatalogFindUniqueArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Catalog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogFindUniqueOrThrowArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindFirstArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogFindFirstArgs>(args?: SelectSubset<T, CatalogFindFirstArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindFirstOrThrowArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Catalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogs
     * const catalogs = await prisma.catalog.findMany()
     * 
     * // Get first 10 Catalogs
     * const catalogs = await prisma.catalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogWithIdOnly = await prisma.catalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatalogFindManyArgs>(args?: SelectSubset<T, CatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Catalog.
     * @param {CatalogCreateArgs} args - Arguments to create a Catalog.
     * @example
     * // Create one Catalog
     * const Catalog = await prisma.catalog.create({
     *   data: {
     *     // ... data to create a Catalog
     *   }
     * })
     * 
     */
    create<T extends CatalogCreateArgs>(args: SelectSubset<T, CatalogCreateArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Catalogs.
     * @param {CatalogCreateManyArgs} args - Arguments to create many Catalogs.
     * @example
     * // Create many Catalogs
     * const catalog = await prisma.catalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogCreateManyArgs>(args?: SelectSubset<T, CatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Catalogs and returns the data saved in the database.
     * @param {CatalogCreateManyAndReturnArgs} args - Arguments to create many Catalogs.
     * @example
     * // Create many Catalogs
     * const catalog = await prisma.catalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Catalogs and only return the `id`
     * const catalogWithIdOnly = await prisma.catalog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Catalog.
     * @param {CatalogDeleteArgs} args - Arguments to delete one Catalog.
     * @example
     * // Delete one Catalog
     * const Catalog = await prisma.catalog.delete({
     *   where: {
     *     // ... filter to delete one Catalog
     *   }
     * })
     * 
     */
    delete<T extends CatalogDeleteArgs>(args: SelectSubset<T, CatalogDeleteArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Catalog.
     * @param {CatalogUpdateArgs} args - Arguments to update one Catalog.
     * @example
     * // Update one Catalog
     * const catalog = await prisma.catalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogUpdateArgs>(args: SelectSubset<T, CatalogUpdateArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Catalogs.
     * @param {CatalogDeleteManyArgs} args - Arguments to filter Catalogs to delete.
     * @example
     * // Delete a few Catalogs
     * const { count } = await prisma.catalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogDeleteManyArgs>(args?: SelectSubset<T, CatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogs
     * const catalog = await prisma.catalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogUpdateManyArgs>(args: SelectSubset<T, CatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogs and returns the data updated in the database.
     * @param {CatalogUpdateManyAndReturnArgs} args - Arguments to update many Catalogs.
     * @example
     * // Update many Catalogs
     * const catalog = await prisma.catalog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Catalogs and only return the `id`
     * const catalogWithIdOnly = await prisma.catalog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CatalogUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Catalog.
     * @param {CatalogUpsertArgs} args - Arguments to update or create a Catalog.
     * @example
     * // Update or create a Catalog
     * const catalog = await prisma.catalog.upsert({
     *   create: {
     *     // ... data to create a Catalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalog we want to update
     *   }
     * })
     */
    upsert<T extends CatalogUpsertArgs>(args: SelectSubset<T, CatalogUpsertArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogCountArgs} args - Arguments to filter Catalogs to count.
     * @example
     * // Count the number of Catalogs
     * const count = await prisma.catalog.count({
     *   where: {
     *     // ... the filter for the Catalogs we want to count
     *   }
     * })
    **/
    count<T extends CatalogCountArgs>(
      args?: Subset<T, CatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogAggregateArgs>(args: Subset<T, CatalogAggregateArgs>): Prisma.PrismaPromise<GetCatalogAggregateType<T>>

    /**
     * Group by Catalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogGroupByArgs['orderBy'] }
        : { orderBy?: CatalogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Catalog model
   */
  readonly fields: CatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Catalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends SellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerDefaultArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Catalog$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Catalog$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkAssignment<T extends Catalog$WorkAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Catalog$WorkAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Catalog model
   */
  interface CatalogFieldRefs {
    readonly id: FieldRef<"Catalog", 'String'>
    readonly name: FieldRef<"Catalog", 'String'>
    readonly type: FieldRef<"Catalog", 'String'>
    readonly sellerId: FieldRef<"Catalog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Catalog findUnique
   */
  export type CatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog findUniqueOrThrow
   */
  export type CatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog findFirst
   */
  export type CatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogs.
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogs.
     */
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Catalog findFirstOrThrow
   */
  export type CatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogs.
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogs.
     */
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Catalog findMany
   */
  export type CatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * Filter, which Catalogs to fetch.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Catalogs.
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Catalog create
   */
  export type CatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * The data needed to create a Catalog.
     */
    data: XOR<CatalogCreateInput, CatalogUncheckedCreateInput>
  }

  /**
   * Catalog createMany
   */
  export type CatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Catalogs.
     */
    data: CatalogCreateManyInput | CatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Catalog createManyAndReturn
   */
  export type CatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The data used to create many Catalogs.
     */
    data: CatalogCreateManyInput | CatalogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Catalog update
   */
  export type CatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * The data needed to update a Catalog.
     */
    data: XOR<CatalogUpdateInput, CatalogUncheckedUpdateInput>
    /**
     * Choose, which Catalog to update.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog updateMany
   */
  export type CatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Catalogs.
     */
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyInput>
    /**
     * Filter which Catalogs to update
     */
    where?: CatalogWhereInput
    /**
     * Limit how many Catalogs to update.
     */
    limit?: number
  }

  /**
   * Catalog updateManyAndReturn
   */
  export type CatalogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The data used to update Catalogs.
     */
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyInput>
    /**
     * Filter which Catalogs to update
     */
    where?: CatalogWhereInput
    /**
     * Limit how many Catalogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Catalog upsert
   */
  export type CatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * The filter to search for the Catalog to update in case it exists.
     */
    where: CatalogWhereUniqueInput
    /**
     * In case the Catalog found by the `where` argument doesn't exist, create a new Catalog with this data.
     */
    create: XOR<CatalogCreateInput, CatalogUncheckedCreateInput>
    /**
     * In case the Catalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogUpdateInput, CatalogUncheckedUpdateInput>
  }

  /**
   * Catalog delete
   */
  export type CatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
    /**
     * Filter which Catalog to delete.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog deleteMany
   */
  export type CatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalogs to delete
     */
    where?: CatalogWhereInput
    /**
     * Limit how many Catalogs to delete.
     */
    limit?: number
  }

  /**
   * Catalog.items
   */
  export type Catalog$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    where?: CatalogItemWhereInput
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    cursor?: CatalogItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * Catalog.WorkAssignment
   */
  export type Catalog$WorkAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    where?: WorkAssignmentWhereInput
    orderBy?: WorkAssignmentOrderByWithRelationInput | WorkAssignmentOrderByWithRelationInput[]
    cursor?: WorkAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkAssignmentScalarFieldEnum | WorkAssignmentScalarFieldEnum[]
  }

  /**
   * Catalog without action
   */
  export type CatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogInclude<ExtArgs> | null
  }


  /**
   * Model CatalogItem
   */

  export type AggregateCatalogItem = {
    _count: CatalogItemCountAggregateOutputType | null
    _avg: CatalogItemAvgAggregateOutputType | null
    _sum: CatalogItemSumAggregateOutputType | null
    _min: CatalogItemMinAggregateOutputType | null
    _max: CatalogItemMaxAggregateOutputType | null
  }

  export type CatalogItemAvgAggregateOutputType = {
    price: number | null
  }

  export type CatalogItemSumAggregateOutputType = {
    price: number | null
  }

  export type CatalogItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    category: string | null
    catalogId: string | null
  }

  export type CatalogItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    category: string | null
    catalogId: string | null
  }

  export type CatalogItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
    category: number
    catalogId: number
    _all: number
  }


  export type CatalogItemAvgAggregateInputType = {
    price?: true
  }

  export type CatalogItemSumAggregateInputType = {
    price?: true
  }

  export type CatalogItemMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    category?: true
    catalogId?: true
  }

  export type CatalogItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    category?: true
    catalogId?: true
  }

  export type CatalogItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    category?: true
    catalogId?: true
    _all?: true
  }

  export type CatalogItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatalogItem to aggregate.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CatalogItems
    **/
    _count?: true | CatalogItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatalogItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatalogItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogItemMaxAggregateInputType
  }

  export type GetCatalogItemAggregateType<T extends CatalogItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogItem[P]>
      : GetScalarType<T[P], AggregateCatalogItem[P]>
  }




  export type CatalogItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogItemWhereInput
    orderBy?: CatalogItemOrderByWithAggregationInput | CatalogItemOrderByWithAggregationInput[]
    by: CatalogItemScalarFieldEnum[] | CatalogItemScalarFieldEnum
    having?: CatalogItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogItemCountAggregateInputType | true
    _avg?: CatalogItemAvgAggregateInputType
    _sum?: CatalogItemSumAggregateInputType
    _min?: CatalogItemMinAggregateInputType
    _max?: CatalogItemMaxAggregateInputType
  }

  export type CatalogItemGroupByOutputType = {
    id: string
    name: string
    price: number
    category: string
    catalogId: string
    _count: CatalogItemCountAggregateOutputType | null
    _avg: CatalogItemAvgAggregateOutputType | null
    _sum: CatalogItemSumAggregateOutputType | null
    _min: CatalogItemMinAggregateOutputType | null
    _max: CatalogItemMaxAggregateOutputType | null
  }

  type GetCatalogItemGroupByPayload<T extends CatalogItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogItemGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogItemGroupByOutputType[P]>
        }
      >
    >


  export type CatalogItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    catalogId?: boolean
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogItem"]>

  export type CatalogItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    catalogId?: boolean
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogItem"]>

  export type CatalogItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    catalogId?: boolean
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogItem"]>

  export type CatalogItemSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    catalogId?: boolean
  }

  export type CatalogItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "category" | "catalogId", ExtArgs["result"]["catalogItem"]>
  export type CatalogItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }
  export type CatalogItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }
  export type CatalogItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }

  export type $CatalogItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CatalogItem"
    objects: {
      catalog: Prisma.$CatalogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      category: string
      catalogId: string
    }, ExtArgs["result"]["catalogItem"]>
    composites: {}
  }

  type CatalogItemGetPayload<S extends boolean | null | undefined | CatalogItemDefaultArgs> = $Result.GetResult<Prisma.$CatalogItemPayload, S>

  type CatalogItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogItemCountAggregateInputType | true
    }

  export interface CatalogItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CatalogItem'], meta: { name: 'CatalogItem' } }
    /**
     * Find zero or one CatalogItem that matches the filter.
     * @param {CatalogItemFindUniqueArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogItemFindUniqueArgs>(args: SelectSubset<T, CatalogItemFindUniqueArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CatalogItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogItemFindUniqueOrThrowArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatalogItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemFindFirstArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogItemFindFirstArgs>(args?: SelectSubset<T, CatalogItemFindFirstArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatalogItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemFindFirstOrThrowArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CatalogItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CatalogItems
     * const catalogItems = await prisma.catalogItem.findMany()
     * 
     * // Get first 10 CatalogItems
     * const catalogItems = await prisma.catalogItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogItemWithIdOnly = await prisma.catalogItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatalogItemFindManyArgs>(args?: SelectSubset<T, CatalogItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CatalogItem.
     * @param {CatalogItemCreateArgs} args - Arguments to create a CatalogItem.
     * @example
     * // Create one CatalogItem
     * const CatalogItem = await prisma.catalogItem.create({
     *   data: {
     *     // ... data to create a CatalogItem
     *   }
     * })
     * 
     */
    create<T extends CatalogItemCreateArgs>(args: SelectSubset<T, CatalogItemCreateArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CatalogItems.
     * @param {CatalogItemCreateManyArgs} args - Arguments to create many CatalogItems.
     * @example
     * // Create many CatalogItems
     * const catalogItem = await prisma.catalogItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogItemCreateManyArgs>(args?: SelectSubset<T, CatalogItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CatalogItems and returns the data saved in the database.
     * @param {CatalogItemCreateManyAndReturnArgs} args - Arguments to create many CatalogItems.
     * @example
     * // Create many CatalogItems
     * const catalogItem = await prisma.catalogItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CatalogItems and only return the `id`
     * const catalogItemWithIdOnly = await prisma.catalogItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CatalogItem.
     * @param {CatalogItemDeleteArgs} args - Arguments to delete one CatalogItem.
     * @example
     * // Delete one CatalogItem
     * const CatalogItem = await prisma.catalogItem.delete({
     *   where: {
     *     // ... filter to delete one CatalogItem
     *   }
     * })
     * 
     */
    delete<T extends CatalogItemDeleteArgs>(args: SelectSubset<T, CatalogItemDeleteArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CatalogItem.
     * @param {CatalogItemUpdateArgs} args - Arguments to update one CatalogItem.
     * @example
     * // Update one CatalogItem
     * const catalogItem = await prisma.catalogItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogItemUpdateArgs>(args: SelectSubset<T, CatalogItemUpdateArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CatalogItems.
     * @param {CatalogItemDeleteManyArgs} args - Arguments to filter CatalogItems to delete.
     * @example
     * // Delete a few CatalogItems
     * const { count } = await prisma.catalogItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogItemDeleteManyArgs>(args?: SelectSubset<T, CatalogItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CatalogItems
     * const catalogItem = await prisma.catalogItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogItemUpdateManyArgs>(args: SelectSubset<T, CatalogItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogItems and returns the data updated in the database.
     * @param {CatalogItemUpdateManyAndReturnArgs} args - Arguments to update many CatalogItems.
     * @example
     * // Update many CatalogItems
     * const catalogItem = await prisma.catalogItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CatalogItems and only return the `id`
     * const catalogItemWithIdOnly = await prisma.catalogItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CatalogItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CatalogItem.
     * @param {CatalogItemUpsertArgs} args - Arguments to update or create a CatalogItem.
     * @example
     * // Update or create a CatalogItem
     * const catalogItem = await prisma.catalogItem.upsert({
     *   create: {
     *     // ... data to create a CatalogItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CatalogItem we want to update
     *   }
     * })
     */
    upsert<T extends CatalogItemUpsertArgs>(args: SelectSubset<T, CatalogItemUpsertArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CatalogItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemCountArgs} args - Arguments to filter CatalogItems to count.
     * @example
     * // Count the number of CatalogItems
     * const count = await prisma.catalogItem.count({
     *   where: {
     *     // ... the filter for the CatalogItems we want to count
     *   }
     * })
    **/
    count<T extends CatalogItemCountArgs>(
      args?: Subset<T, CatalogItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CatalogItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogItemAggregateArgs>(args: Subset<T, CatalogItemAggregateArgs>): Prisma.PrismaPromise<GetCatalogItemAggregateType<T>>

    /**
     * Group by CatalogItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogItemGroupByArgs['orderBy'] }
        : { orderBy?: CatalogItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CatalogItem model
   */
  readonly fields: CatalogItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CatalogItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    catalog<T extends CatalogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CatalogDefaultArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CatalogItem model
   */
  interface CatalogItemFieldRefs {
    readonly id: FieldRef<"CatalogItem", 'String'>
    readonly name: FieldRef<"CatalogItem", 'String'>
    readonly price: FieldRef<"CatalogItem", 'Float'>
    readonly category: FieldRef<"CatalogItem", 'String'>
    readonly catalogId: FieldRef<"CatalogItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CatalogItem findUnique
   */
  export type CatalogItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem findUniqueOrThrow
   */
  export type CatalogItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem findFirst
   */
  export type CatalogItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogItems.
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogItems.
     */
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * CatalogItem findFirstOrThrow
   */
  export type CatalogItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogItems.
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogItems.
     */
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * CatalogItem findMany
   */
  export type CatalogItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItems to fetch.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CatalogItems.
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * CatalogItem create
   */
  export type CatalogItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CatalogItem.
     */
    data: XOR<CatalogItemCreateInput, CatalogItemUncheckedCreateInput>
  }

  /**
   * CatalogItem createMany
   */
  export type CatalogItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CatalogItems.
     */
    data: CatalogItemCreateManyInput | CatalogItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CatalogItem createManyAndReturn
   */
  export type CatalogItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * The data used to create many CatalogItems.
     */
    data: CatalogItemCreateManyInput | CatalogItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CatalogItem update
   */
  export type CatalogItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CatalogItem.
     */
    data: XOR<CatalogItemUpdateInput, CatalogItemUncheckedUpdateInput>
    /**
     * Choose, which CatalogItem to update.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem updateMany
   */
  export type CatalogItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CatalogItems.
     */
    data: XOR<CatalogItemUpdateManyMutationInput, CatalogItemUncheckedUpdateManyInput>
    /**
     * Filter which CatalogItems to update
     */
    where?: CatalogItemWhereInput
    /**
     * Limit how many CatalogItems to update.
     */
    limit?: number
  }

  /**
   * CatalogItem updateManyAndReturn
   */
  export type CatalogItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * The data used to update CatalogItems.
     */
    data: XOR<CatalogItemUpdateManyMutationInput, CatalogItemUncheckedUpdateManyInput>
    /**
     * Filter which CatalogItems to update
     */
    where?: CatalogItemWhereInput
    /**
     * Limit how many CatalogItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CatalogItem upsert
   */
  export type CatalogItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CatalogItem to update in case it exists.
     */
    where: CatalogItemWhereUniqueInput
    /**
     * In case the CatalogItem found by the `where` argument doesn't exist, create a new CatalogItem with this data.
     */
    create: XOR<CatalogItemCreateInput, CatalogItemUncheckedCreateInput>
    /**
     * In case the CatalogItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogItemUpdateInput, CatalogItemUncheckedUpdateInput>
  }

  /**
   * CatalogItem delete
   */
  export type CatalogItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter which CatalogItem to delete.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem deleteMany
   */
  export type CatalogItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatalogItems to delete
     */
    where?: CatalogItemWhereInput
    /**
     * Limit how many CatalogItems to delete.
     */
    limit?: number
  }

  /**
   * CatalogItem without action
   */
  export type CatalogItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
  }


  /**
   * Model WorkAssignment
   */

  export type AggregateWorkAssignment = {
    _count: WorkAssignmentCountAggregateOutputType | null
    _min: WorkAssignmentMinAggregateOutputType | null
    _max: WorkAssignmentMaxAggregateOutputType | null
  }

  export type WorkAssignmentMinAggregateOutputType = {
    id: string | null
    operatorId: string | null
    catalogId: string | null
    role: string | null
  }

  export type WorkAssignmentMaxAggregateOutputType = {
    id: string | null
    operatorId: string | null
    catalogId: string | null
    role: string | null
  }

  export type WorkAssignmentCountAggregateOutputType = {
    id: number
    operatorId: number
    catalogId: number
    role: number
    _all: number
  }


  export type WorkAssignmentMinAggregateInputType = {
    id?: true
    operatorId?: true
    catalogId?: true
    role?: true
  }

  export type WorkAssignmentMaxAggregateInputType = {
    id?: true
    operatorId?: true
    catalogId?: true
    role?: true
  }

  export type WorkAssignmentCountAggregateInputType = {
    id?: true
    operatorId?: true
    catalogId?: true
    role?: true
    _all?: true
  }

  export type WorkAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkAssignment to aggregate.
     */
    where?: WorkAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkAssignments to fetch.
     */
    orderBy?: WorkAssignmentOrderByWithRelationInput | WorkAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkAssignments
    **/
    _count?: true | WorkAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkAssignmentMaxAggregateInputType
  }

  export type GetWorkAssignmentAggregateType<T extends WorkAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkAssignment[P]>
      : GetScalarType<T[P], AggregateWorkAssignment[P]>
  }




  export type WorkAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkAssignmentWhereInput
    orderBy?: WorkAssignmentOrderByWithAggregationInput | WorkAssignmentOrderByWithAggregationInput[]
    by: WorkAssignmentScalarFieldEnum[] | WorkAssignmentScalarFieldEnum
    having?: WorkAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkAssignmentCountAggregateInputType | true
    _min?: WorkAssignmentMinAggregateInputType
    _max?: WorkAssignmentMaxAggregateInputType
  }

  export type WorkAssignmentGroupByOutputType = {
    id: string
    operatorId: string
    catalogId: string
    role: string
    _count: WorkAssignmentCountAggregateOutputType | null
    _min: WorkAssignmentMinAggregateOutputType | null
    _max: WorkAssignmentMaxAggregateOutputType | null
  }

  type GetWorkAssignmentGroupByPayload<T extends WorkAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], WorkAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type WorkAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    catalogId?: boolean
    role?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workAssignment"]>

  export type WorkAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    catalogId?: boolean
    role?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workAssignment"]>

  export type WorkAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    catalogId?: boolean
    role?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workAssignment"]>

  export type WorkAssignmentSelectScalar = {
    id?: boolean
    operatorId?: boolean
    catalogId?: boolean
    role?: boolean
  }

  export type WorkAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "operatorId" | "catalogId" | "role", ExtArgs["result"]["workAssignment"]>
  export type WorkAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }
  export type WorkAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }
  export type WorkAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    catalog?: boolean | CatalogDefaultArgs<ExtArgs>
  }

  export type $WorkAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkAssignment"
    objects: {
      operator: Prisma.$OperatorPayload<ExtArgs>
      catalog: Prisma.$CatalogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operatorId: string
      catalogId: string
      role: string
    }, ExtArgs["result"]["workAssignment"]>
    composites: {}
  }

  type WorkAssignmentGetPayload<S extends boolean | null | undefined | WorkAssignmentDefaultArgs> = $Result.GetResult<Prisma.$WorkAssignmentPayload, S>

  type WorkAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkAssignmentCountAggregateInputType | true
    }

  export interface WorkAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkAssignment'], meta: { name: 'WorkAssignment' } }
    /**
     * Find zero or one WorkAssignment that matches the filter.
     * @param {WorkAssignmentFindUniqueArgs} args - Arguments to find a WorkAssignment
     * @example
     * // Get one WorkAssignment
     * const workAssignment = await prisma.workAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkAssignmentFindUniqueArgs>(args: SelectSubset<T, WorkAssignmentFindUniqueArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkAssignmentFindUniqueOrThrowArgs} args - Arguments to find a WorkAssignment
     * @example
     * // Get one WorkAssignment
     * const workAssignment = await prisma.workAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentFindFirstArgs} args - Arguments to find a WorkAssignment
     * @example
     * // Get one WorkAssignment
     * const workAssignment = await prisma.workAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkAssignmentFindFirstArgs>(args?: SelectSubset<T, WorkAssignmentFindFirstArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentFindFirstOrThrowArgs} args - Arguments to find a WorkAssignment
     * @example
     * // Get one WorkAssignment
     * const workAssignment = await prisma.workAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkAssignments
     * const workAssignments = await prisma.workAssignment.findMany()
     * 
     * // Get first 10 WorkAssignments
     * const workAssignments = await prisma.workAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workAssignmentWithIdOnly = await prisma.workAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkAssignmentFindManyArgs>(args?: SelectSubset<T, WorkAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkAssignment.
     * @param {WorkAssignmentCreateArgs} args - Arguments to create a WorkAssignment.
     * @example
     * // Create one WorkAssignment
     * const WorkAssignment = await prisma.workAssignment.create({
     *   data: {
     *     // ... data to create a WorkAssignment
     *   }
     * })
     * 
     */
    create<T extends WorkAssignmentCreateArgs>(args: SelectSubset<T, WorkAssignmentCreateArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkAssignments.
     * @param {WorkAssignmentCreateManyArgs} args - Arguments to create many WorkAssignments.
     * @example
     * // Create many WorkAssignments
     * const workAssignment = await prisma.workAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkAssignmentCreateManyArgs>(args?: SelectSubset<T, WorkAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkAssignments and returns the data saved in the database.
     * @param {WorkAssignmentCreateManyAndReturnArgs} args - Arguments to create many WorkAssignments.
     * @example
     * // Create many WorkAssignments
     * const workAssignment = await prisma.workAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkAssignments and only return the `id`
     * const workAssignmentWithIdOnly = await prisma.workAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkAssignment.
     * @param {WorkAssignmentDeleteArgs} args - Arguments to delete one WorkAssignment.
     * @example
     * // Delete one WorkAssignment
     * const WorkAssignment = await prisma.workAssignment.delete({
     *   where: {
     *     // ... filter to delete one WorkAssignment
     *   }
     * })
     * 
     */
    delete<T extends WorkAssignmentDeleteArgs>(args: SelectSubset<T, WorkAssignmentDeleteArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkAssignment.
     * @param {WorkAssignmentUpdateArgs} args - Arguments to update one WorkAssignment.
     * @example
     * // Update one WorkAssignment
     * const workAssignment = await prisma.workAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkAssignmentUpdateArgs>(args: SelectSubset<T, WorkAssignmentUpdateArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkAssignments.
     * @param {WorkAssignmentDeleteManyArgs} args - Arguments to filter WorkAssignments to delete.
     * @example
     * // Delete a few WorkAssignments
     * const { count } = await prisma.workAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkAssignmentDeleteManyArgs>(args?: SelectSubset<T, WorkAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkAssignments
     * const workAssignment = await prisma.workAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkAssignmentUpdateManyArgs>(args: SelectSubset<T, WorkAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkAssignments and returns the data updated in the database.
     * @param {WorkAssignmentUpdateManyAndReturnArgs} args - Arguments to update many WorkAssignments.
     * @example
     * // Update many WorkAssignments
     * const workAssignment = await prisma.workAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkAssignments and only return the `id`
     * const workAssignmentWithIdOnly = await prisma.workAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkAssignment.
     * @param {WorkAssignmentUpsertArgs} args - Arguments to update or create a WorkAssignment.
     * @example
     * // Update or create a WorkAssignment
     * const workAssignment = await prisma.workAssignment.upsert({
     *   create: {
     *     // ... data to create a WorkAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkAssignment we want to update
     *   }
     * })
     */
    upsert<T extends WorkAssignmentUpsertArgs>(args: SelectSubset<T, WorkAssignmentUpsertArgs<ExtArgs>>): Prisma__WorkAssignmentClient<$Result.GetResult<Prisma.$WorkAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentCountArgs} args - Arguments to filter WorkAssignments to count.
     * @example
     * // Count the number of WorkAssignments
     * const count = await prisma.workAssignment.count({
     *   where: {
     *     // ... the filter for the WorkAssignments we want to count
     *   }
     * })
    **/
    count<T extends WorkAssignmentCountArgs>(
      args?: Subset<T, WorkAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAssignmentAggregateArgs>(args: Subset<T, WorkAssignmentAggregateArgs>): Prisma.PrismaPromise<GetWorkAssignmentAggregateType<T>>

    /**
     * Group by WorkAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: WorkAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkAssignment model
   */
  readonly fields: WorkAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operator<T extends OperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperatorDefaultArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    catalog<T extends CatalogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CatalogDefaultArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkAssignment model
   */
  interface WorkAssignmentFieldRefs {
    readonly id: FieldRef<"WorkAssignment", 'String'>
    readonly operatorId: FieldRef<"WorkAssignment", 'String'>
    readonly catalogId: FieldRef<"WorkAssignment", 'String'>
    readonly role: FieldRef<"WorkAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkAssignment findUnique
   */
  export type WorkAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkAssignment to fetch.
     */
    where: WorkAssignmentWhereUniqueInput
  }

  /**
   * WorkAssignment findUniqueOrThrow
   */
  export type WorkAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkAssignment to fetch.
     */
    where: WorkAssignmentWhereUniqueInput
  }

  /**
   * WorkAssignment findFirst
   */
  export type WorkAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkAssignment to fetch.
     */
    where?: WorkAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkAssignments to fetch.
     */
    orderBy?: WorkAssignmentOrderByWithRelationInput | WorkAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkAssignments.
     */
    cursor?: WorkAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkAssignments.
     */
    distinct?: WorkAssignmentScalarFieldEnum | WorkAssignmentScalarFieldEnum[]
  }

  /**
   * WorkAssignment findFirstOrThrow
   */
  export type WorkAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkAssignment to fetch.
     */
    where?: WorkAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkAssignments to fetch.
     */
    orderBy?: WorkAssignmentOrderByWithRelationInput | WorkAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkAssignments.
     */
    cursor?: WorkAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkAssignments.
     */
    distinct?: WorkAssignmentScalarFieldEnum | WorkAssignmentScalarFieldEnum[]
  }

  /**
   * WorkAssignment findMany
   */
  export type WorkAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkAssignments to fetch.
     */
    where?: WorkAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkAssignments to fetch.
     */
    orderBy?: WorkAssignmentOrderByWithRelationInput | WorkAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkAssignments.
     */
    cursor?: WorkAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkAssignments.
     */
    skip?: number
    distinct?: WorkAssignmentScalarFieldEnum | WorkAssignmentScalarFieldEnum[]
  }

  /**
   * WorkAssignment create
   */
  export type WorkAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkAssignment.
     */
    data: XOR<WorkAssignmentCreateInput, WorkAssignmentUncheckedCreateInput>
  }

  /**
   * WorkAssignment createMany
   */
  export type WorkAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkAssignments.
     */
    data: WorkAssignmentCreateManyInput | WorkAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkAssignment createManyAndReturn
   */
  export type WorkAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many WorkAssignments.
     */
    data: WorkAssignmentCreateManyInput | WorkAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkAssignment update
   */
  export type WorkAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkAssignment.
     */
    data: XOR<WorkAssignmentUpdateInput, WorkAssignmentUncheckedUpdateInput>
    /**
     * Choose, which WorkAssignment to update.
     */
    where: WorkAssignmentWhereUniqueInput
  }

  /**
   * WorkAssignment updateMany
   */
  export type WorkAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkAssignments.
     */
    data: XOR<WorkAssignmentUpdateManyMutationInput, WorkAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which WorkAssignments to update
     */
    where?: WorkAssignmentWhereInput
    /**
     * Limit how many WorkAssignments to update.
     */
    limit?: number
  }

  /**
   * WorkAssignment updateManyAndReturn
   */
  export type WorkAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update WorkAssignments.
     */
    data: XOR<WorkAssignmentUpdateManyMutationInput, WorkAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which WorkAssignments to update
     */
    where?: WorkAssignmentWhereInput
    /**
     * Limit how many WorkAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkAssignment upsert
   */
  export type WorkAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkAssignment to update in case it exists.
     */
    where: WorkAssignmentWhereUniqueInput
    /**
     * In case the WorkAssignment found by the `where` argument doesn't exist, create a new WorkAssignment with this data.
     */
    create: XOR<WorkAssignmentCreateInput, WorkAssignmentUncheckedCreateInput>
    /**
     * In case the WorkAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkAssignmentUpdateInput, WorkAssignmentUncheckedUpdateInput>
  }

  /**
   * WorkAssignment delete
   */
  export type WorkAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
    /**
     * Filter which WorkAssignment to delete.
     */
    where: WorkAssignmentWhereUniqueInput
  }

  /**
   * WorkAssignment deleteMany
   */
  export type WorkAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkAssignments to delete
     */
    where?: WorkAssignmentWhereInput
    /**
     * Limit how many WorkAssignments to delete.
     */
    limit?: number
  }

  /**
   * WorkAssignment without action
   */
  export type WorkAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAssignment
     */
    select?: WorkAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkAssignment
     */
    omit?: WorkAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkAssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OperationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    status: 'status'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const SellerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    operationId: 'operationId'
  };

  export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum]


  export const OperatorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sellerId: 'sellerId'
  };

  export type OperatorScalarFieldEnum = (typeof OperatorScalarFieldEnum)[keyof typeof OperatorScalarFieldEnum]


  export const CatalogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    sellerId: 'sellerId'
  };

  export type CatalogScalarFieldEnum = (typeof CatalogScalarFieldEnum)[keyof typeof CatalogScalarFieldEnum]


  export const CatalogItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    category: 'category',
    catalogId: 'catalogId'
  };

  export type CatalogItemScalarFieldEnum = (typeof CatalogItemScalarFieldEnum)[keyof typeof CatalogItemScalarFieldEnum]


  export const WorkAssignmentScalarFieldEnum: {
    id: 'id',
    operatorId: 'operatorId',
    catalogId: 'catalogId',
    role: 'role'
  };

  export type WorkAssignmentScalarFieldEnum = (typeof WorkAssignmentScalarFieldEnum)[keyof typeof WorkAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    id?: StringFilter<"Operation"> | string
    name?: StringFilter<"Operation"> | string
    date?: DateTimeFilter<"Operation"> | Date | string
    status?: StringFilter<"Operation"> | string
    sellers?: SellerListRelationFilter
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    status?: SortOrder
    sellers?: SellerOrderByRelationAggregateInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    name?: StringFilter<"Operation"> | string
    date?: DateTimeFilter<"Operation"> | Date | string
    status?: StringFilter<"Operation"> | string
    sellers?: SellerListRelationFilter
  }, "id">

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operation"> | string
    name?: StringWithAggregatesFilter<"Operation"> | string
    date?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    status?: StringWithAggregatesFilter<"Operation"> | string
  }

  export type SellerWhereInput = {
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    id?: StringFilter<"Seller"> | string
    name?: StringFilter<"Seller"> | string
    cpf?: StringFilter<"Seller"> | string
    operationId?: StringNullableFilter<"Seller"> | string | null
    Operation?: XOR<OperationNullableScalarRelationFilter, OperationWhereInput> | null
    operators?: OperatorListRelationFilter
    catalogs?: CatalogListRelationFilter
  }

  export type SellerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    operationId?: SortOrderInput | SortOrder
    Operation?: OperationOrderByWithRelationInput
    operators?: OperatorOrderByRelationAggregateInput
    catalogs?: CatalogOrderByRelationAggregateInput
  }

  export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    name?: StringFilter<"Seller"> | string
    cpf?: StringFilter<"Seller"> | string
    operationId?: StringNullableFilter<"Seller"> | string | null
    Operation?: XOR<OperationNullableScalarRelationFilter, OperationWhereInput> | null
    operators?: OperatorListRelationFilter
    catalogs?: CatalogListRelationFilter
  }, "id">

  export type SellerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    operationId?: SortOrderInput | SortOrder
    _count?: SellerCountOrderByAggregateInput
    _max?: SellerMaxOrderByAggregateInput
    _min?: SellerMinOrderByAggregateInput
  }

  export type SellerScalarWhereWithAggregatesInput = {
    AND?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    OR?: SellerScalarWhereWithAggregatesInput[]
    NOT?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seller"> | string
    name?: StringWithAggregatesFilter<"Seller"> | string
    cpf?: StringWithAggregatesFilter<"Seller"> | string
    operationId?: StringNullableWithAggregatesFilter<"Seller"> | string | null
  }

  export type OperatorWhereInput = {
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    id?: StringFilter<"Operator"> | string
    name?: StringFilter<"Operator"> | string
    sellerId?: StringFilter<"Operator"> | string
    seller?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    WorkAssignment?: WorkAssignmentListRelationFilter
  }

  export type OperatorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sellerId?: SortOrder
    seller?: SellerOrderByWithRelationInput
    WorkAssignment?: WorkAssignmentOrderByRelationAggregateInput
  }

  export type OperatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    name?: StringFilter<"Operator"> | string
    sellerId?: StringFilter<"Operator"> | string
    seller?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    WorkAssignment?: WorkAssignmentListRelationFilter
  }, "id">

  export type OperatorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sellerId?: SortOrder
    _count?: OperatorCountOrderByAggregateInput
    _max?: OperatorMaxOrderByAggregateInput
    _min?: OperatorMinOrderByAggregateInput
  }

  export type OperatorScalarWhereWithAggregatesInput = {
    AND?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    OR?: OperatorScalarWhereWithAggregatesInput[]
    NOT?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operator"> | string
    name?: StringWithAggregatesFilter<"Operator"> | string
    sellerId?: StringWithAggregatesFilter<"Operator"> | string
  }

  export type CatalogWhereInput = {
    AND?: CatalogWhereInput | CatalogWhereInput[]
    OR?: CatalogWhereInput[]
    NOT?: CatalogWhereInput | CatalogWhereInput[]
    id?: StringFilter<"Catalog"> | string
    name?: StringFilter<"Catalog"> | string
    type?: StringFilter<"Catalog"> | string
    sellerId?: StringFilter<"Catalog"> | string
    seller?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    items?: CatalogItemListRelationFilter
    WorkAssignment?: WorkAssignmentListRelationFilter
  }

  export type CatalogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sellerId?: SortOrder
    seller?: SellerOrderByWithRelationInput
    items?: CatalogItemOrderByRelationAggregateInput
    WorkAssignment?: WorkAssignmentOrderByRelationAggregateInput
  }

  export type CatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CatalogWhereInput | CatalogWhereInput[]
    OR?: CatalogWhereInput[]
    NOT?: CatalogWhereInput | CatalogWhereInput[]
    name?: StringFilter<"Catalog"> | string
    type?: StringFilter<"Catalog"> | string
    sellerId?: StringFilter<"Catalog"> | string
    seller?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    items?: CatalogItemListRelationFilter
    WorkAssignment?: WorkAssignmentListRelationFilter
  }, "id">

  export type CatalogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sellerId?: SortOrder
    _count?: CatalogCountOrderByAggregateInput
    _max?: CatalogMaxOrderByAggregateInput
    _min?: CatalogMinOrderByAggregateInput
  }

  export type CatalogScalarWhereWithAggregatesInput = {
    AND?: CatalogScalarWhereWithAggregatesInput | CatalogScalarWhereWithAggregatesInput[]
    OR?: CatalogScalarWhereWithAggregatesInput[]
    NOT?: CatalogScalarWhereWithAggregatesInput | CatalogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Catalog"> | string
    name?: StringWithAggregatesFilter<"Catalog"> | string
    type?: StringWithAggregatesFilter<"Catalog"> | string
    sellerId?: StringWithAggregatesFilter<"Catalog"> | string
  }

  export type CatalogItemWhereInput = {
    AND?: CatalogItemWhereInput | CatalogItemWhereInput[]
    OR?: CatalogItemWhereInput[]
    NOT?: CatalogItemWhereInput | CatalogItemWhereInput[]
    id?: StringFilter<"CatalogItem"> | string
    name?: StringFilter<"CatalogItem"> | string
    price?: FloatFilter<"CatalogItem"> | number
    category?: StringFilter<"CatalogItem"> | string
    catalogId?: StringFilter<"CatalogItem"> | string
    catalog?: XOR<CatalogScalarRelationFilter, CatalogWhereInput>
  }

  export type CatalogItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    catalogId?: SortOrder
    catalog?: CatalogOrderByWithRelationInput
  }

  export type CatalogItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CatalogItemWhereInput | CatalogItemWhereInput[]
    OR?: CatalogItemWhereInput[]
    NOT?: CatalogItemWhereInput | CatalogItemWhereInput[]
    name?: StringFilter<"CatalogItem"> | string
    price?: FloatFilter<"CatalogItem"> | number
    category?: StringFilter<"CatalogItem"> | string
    catalogId?: StringFilter<"CatalogItem"> | string
    catalog?: XOR<CatalogScalarRelationFilter, CatalogWhereInput>
  }, "id">

  export type CatalogItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    catalogId?: SortOrder
    _count?: CatalogItemCountOrderByAggregateInput
    _avg?: CatalogItemAvgOrderByAggregateInput
    _max?: CatalogItemMaxOrderByAggregateInput
    _min?: CatalogItemMinOrderByAggregateInput
    _sum?: CatalogItemSumOrderByAggregateInput
  }

  export type CatalogItemScalarWhereWithAggregatesInput = {
    AND?: CatalogItemScalarWhereWithAggregatesInput | CatalogItemScalarWhereWithAggregatesInput[]
    OR?: CatalogItemScalarWhereWithAggregatesInput[]
    NOT?: CatalogItemScalarWhereWithAggregatesInput | CatalogItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CatalogItem"> | string
    name?: StringWithAggregatesFilter<"CatalogItem"> | string
    price?: FloatWithAggregatesFilter<"CatalogItem"> | number
    category?: StringWithAggregatesFilter<"CatalogItem"> | string
    catalogId?: StringWithAggregatesFilter<"CatalogItem"> | string
  }

  export type WorkAssignmentWhereInput = {
    AND?: WorkAssignmentWhereInput | WorkAssignmentWhereInput[]
    OR?: WorkAssignmentWhereInput[]
    NOT?: WorkAssignmentWhereInput | WorkAssignmentWhereInput[]
    id?: StringFilter<"WorkAssignment"> | string
    operatorId?: StringFilter<"WorkAssignment"> | string
    catalogId?: StringFilter<"WorkAssignment"> | string
    role?: StringFilter<"WorkAssignment"> | string
    operator?: XOR<OperatorScalarRelationFilter, OperatorWhereInput>
    catalog?: XOR<CatalogScalarRelationFilter, CatalogWhereInput>
  }

  export type WorkAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    catalogId?: SortOrder
    role?: SortOrder
    operator?: OperatorOrderByWithRelationInput
    catalog?: CatalogOrderByWithRelationInput
  }

  export type WorkAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkAssignmentWhereInput | WorkAssignmentWhereInput[]
    OR?: WorkAssignmentWhereInput[]
    NOT?: WorkAssignmentWhereInput | WorkAssignmentWhereInput[]
    operatorId?: StringFilter<"WorkAssignment"> | string
    catalogId?: StringFilter<"WorkAssignment"> | string
    role?: StringFilter<"WorkAssignment"> | string
    operator?: XOR<OperatorScalarRelationFilter, OperatorWhereInput>
    catalog?: XOR<CatalogScalarRelationFilter, CatalogWhereInput>
  }, "id">

  export type WorkAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    catalogId?: SortOrder
    role?: SortOrder
    _count?: WorkAssignmentCountOrderByAggregateInput
    _max?: WorkAssignmentMaxOrderByAggregateInput
    _min?: WorkAssignmentMinOrderByAggregateInput
  }

  export type WorkAssignmentScalarWhereWithAggregatesInput = {
    AND?: WorkAssignmentScalarWhereWithAggregatesInput | WorkAssignmentScalarWhereWithAggregatesInput[]
    OR?: WorkAssignmentScalarWhereWithAggregatesInput[]
    NOT?: WorkAssignmentScalarWhereWithAggregatesInput | WorkAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkAssignment"> | string
    operatorId?: StringWithAggregatesFilter<"WorkAssignment"> | string
    catalogId?: StringWithAggregatesFilter<"WorkAssignment"> | string
    role?: StringWithAggregatesFilter<"WorkAssignment"> | string
  }

  export type OperationCreateInput = {
    id?: string
    name: string
    date: Date | string
    status: string
    sellers?: SellerCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    status: string
    sellers?: SellerUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sellers?: SellerUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sellers?: SellerUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type OperationCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    status: string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SellerCreateInput = {
    id?: string
    name: string
    cpf: string
    Operation?: OperationCreateNestedOneWithoutSellersInput
    operators?: OperatorCreateNestedManyWithoutSellerInput
    catalogs?: CatalogCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    operationId?: string | null
    operators?: OperatorUncheckedCreateNestedManyWithoutSellerInput
    catalogs?: CatalogUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    Operation?: OperationUpdateOneWithoutSellersNestedInput
    operators?: OperatorUpdateManyWithoutSellerNestedInput
    catalogs?: CatalogUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    operationId?: NullableStringFieldUpdateOperationsInput | string | null
    operators?: OperatorUncheckedUpdateManyWithoutSellerNestedInput
    catalogs?: CatalogUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type SellerCreateManyInput = {
    id?: string
    name: string
    cpf: string
    operationId?: string | null
  }

  export type SellerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type SellerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    operationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OperatorCreateInput = {
    id?: string
    name: string
    seller: SellerCreateNestedOneWithoutOperatorsInput
    WorkAssignment?: WorkAssignmentCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateInput = {
    id?: string
    name: string
    sellerId: string
    WorkAssignment?: WorkAssignmentUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seller?: SellerUpdateOneRequiredWithoutOperatorsNestedInput
    WorkAssignment?: WorkAssignmentUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    WorkAssignment?: WorkAssignmentUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorCreateManyInput = {
    id?: string
    name: string
    sellerId: string
  }

  export type OperatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OperatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogCreateInput = {
    id?: string
    name: string
    type: string
    seller: SellerCreateNestedOneWithoutCatalogsInput
    items?: CatalogItemCreateNestedManyWithoutCatalogInput
    WorkAssignment?: WorkAssignmentCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    sellerId: string
    items?: CatalogItemUncheckedCreateNestedManyWithoutCatalogInput
    WorkAssignment?: WorkAssignmentUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    seller?: SellerUpdateOneRequiredWithoutCatalogsNestedInput
    items?: CatalogItemUpdateManyWithoutCatalogNestedInput
    WorkAssignment?: WorkAssignmentUpdateManyWithoutCatalogNestedInput
  }

  export type CatalogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    items?: CatalogItemUncheckedUpdateManyWithoutCatalogNestedInput
    WorkAssignment?: WorkAssignmentUncheckedUpdateManyWithoutCatalogNestedInput
  }

  export type CatalogCreateManyInput = {
    id?: string
    name: string
    type: string
    sellerId: string
  }

  export type CatalogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogItemCreateInput = {
    id?: string
    name: string
    price: number
    category: string
    catalog: CatalogCreateNestedOneWithoutItemsInput
  }

  export type CatalogItemUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    category: string
    catalogId: string
  }

  export type CatalogItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    catalog?: CatalogUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CatalogItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogItemCreateManyInput = {
    id?: string
    name: string
    price: number
    category: string
    catalogId: string
  }

  export type CatalogItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentCreateInput = {
    id?: string
    role: string
    operator: OperatorCreateNestedOneWithoutWorkAssignmentInput
    catalog: CatalogCreateNestedOneWithoutWorkAssignmentInput
  }

  export type WorkAssignmentUncheckedCreateInput = {
    id?: string
    operatorId: string
    catalogId: string
    role: string
  }

  export type WorkAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    operator?: OperatorUpdateOneRequiredWithoutWorkAssignmentNestedInput
    catalog?: CatalogUpdateOneRequiredWithoutWorkAssignmentNestedInput
  }

  export type WorkAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentCreateManyInput = {
    id?: string
    operatorId: string
    catalogId: string
    role: string
  }

  export type WorkAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SellerListRelationFilter = {
    every?: SellerWhereInput
    some?: SellerWhereInput
    none?: SellerWhereInput
  }

  export type SellerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OperationNullableScalarRelationFilter = {
    is?: OperationWhereInput | null
    isNot?: OperationWhereInput | null
  }

  export type OperatorListRelationFilter = {
    every?: OperatorWhereInput
    some?: OperatorWhereInput
    none?: OperatorWhereInput
  }

  export type CatalogListRelationFilter = {
    every?: CatalogWhereInput
    some?: CatalogWhereInput
    none?: CatalogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OperatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    operationId?: SortOrder
  }

  export type SellerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    operationId?: SortOrder
  }

  export type SellerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    operationId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SellerScalarRelationFilter = {
    is?: SellerWhereInput
    isNot?: SellerWhereInput
  }

  export type WorkAssignmentListRelationFilter = {
    every?: WorkAssignmentWhereInput
    some?: WorkAssignmentWhereInput
    none?: WorkAssignmentWhereInput
  }

  export type WorkAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperatorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sellerId?: SortOrder
  }

  export type OperatorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sellerId?: SortOrder
  }

  export type OperatorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sellerId?: SortOrder
  }

  export type CatalogItemListRelationFilter = {
    every?: CatalogItemWhereInput
    some?: CatalogItemWhereInput
    none?: CatalogItemWhereInput
  }

  export type CatalogItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sellerId?: SortOrder
  }

  export type CatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sellerId?: SortOrder
  }

  export type CatalogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sellerId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CatalogScalarRelationFilter = {
    is?: CatalogWhereInput
    isNot?: CatalogWhereInput
  }

  export type CatalogItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    catalogId?: SortOrder
  }

  export type CatalogItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CatalogItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    catalogId?: SortOrder
  }

  export type CatalogItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    catalogId?: SortOrder
  }

  export type CatalogItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OperatorScalarRelationFilter = {
    is?: OperatorWhereInput
    isNot?: OperatorWhereInput
  }

  export type WorkAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    catalogId?: SortOrder
    role?: SortOrder
  }

  export type WorkAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    catalogId?: SortOrder
    role?: SortOrder
  }

  export type WorkAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    catalogId?: SortOrder
    role?: SortOrder
  }

  export type SellerCreateNestedManyWithoutOperationInput = {
    create?: XOR<SellerCreateWithoutOperationInput, SellerUncheckedCreateWithoutOperationInput> | SellerCreateWithoutOperationInput[] | SellerUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: SellerCreateOrConnectWithoutOperationInput | SellerCreateOrConnectWithoutOperationInput[]
    createMany?: SellerCreateManyOperationInputEnvelope
    connect?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
  }

  export type SellerUncheckedCreateNestedManyWithoutOperationInput = {
    create?: XOR<SellerCreateWithoutOperationInput, SellerUncheckedCreateWithoutOperationInput> | SellerCreateWithoutOperationInput[] | SellerUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: SellerCreateOrConnectWithoutOperationInput | SellerCreateOrConnectWithoutOperationInput[]
    createMany?: SellerCreateManyOperationInputEnvelope
    connect?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SellerUpdateManyWithoutOperationNestedInput = {
    create?: XOR<SellerCreateWithoutOperationInput, SellerUncheckedCreateWithoutOperationInput> | SellerCreateWithoutOperationInput[] | SellerUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: SellerCreateOrConnectWithoutOperationInput | SellerCreateOrConnectWithoutOperationInput[]
    upsert?: SellerUpsertWithWhereUniqueWithoutOperationInput | SellerUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: SellerCreateManyOperationInputEnvelope
    set?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    disconnect?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    delete?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    connect?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    update?: SellerUpdateWithWhereUniqueWithoutOperationInput | SellerUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: SellerUpdateManyWithWhereWithoutOperationInput | SellerUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: SellerScalarWhereInput | SellerScalarWhereInput[]
  }

  export type SellerUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: XOR<SellerCreateWithoutOperationInput, SellerUncheckedCreateWithoutOperationInput> | SellerCreateWithoutOperationInput[] | SellerUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: SellerCreateOrConnectWithoutOperationInput | SellerCreateOrConnectWithoutOperationInput[]
    upsert?: SellerUpsertWithWhereUniqueWithoutOperationInput | SellerUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: SellerCreateManyOperationInputEnvelope
    set?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    disconnect?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    delete?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    connect?: SellerWhereUniqueInput | SellerWhereUniqueInput[]
    update?: SellerUpdateWithWhereUniqueWithoutOperationInput | SellerUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: SellerUpdateManyWithWhereWithoutOperationInput | SellerUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: SellerScalarWhereInput | SellerScalarWhereInput[]
  }

  export type OperationCreateNestedOneWithoutSellersInput = {
    create?: XOR<OperationCreateWithoutSellersInput, OperationUncheckedCreateWithoutSellersInput>
    connectOrCreate?: OperationCreateOrConnectWithoutSellersInput
    connect?: OperationWhereUniqueInput
  }

  export type OperatorCreateNestedManyWithoutSellerInput = {
    create?: XOR<OperatorCreateWithoutSellerInput, OperatorUncheckedCreateWithoutSellerInput> | OperatorCreateWithoutSellerInput[] | OperatorUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutSellerInput | OperatorCreateOrConnectWithoutSellerInput[]
    createMany?: OperatorCreateManySellerInputEnvelope
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
  }

  export type CatalogCreateNestedManyWithoutSellerInput = {
    create?: XOR<CatalogCreateWithoutSellerInput, CatalogUncheckedCreateWithoutSellerInput> | CatalogCreateWithoutSellerInput[] | CatalogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: CatalogCreateOrConnectWithoutSellerInput | CatalogCreateOrConnectWithoutSellerInput[]
    createMany?: CatalogCreateManySellerInputEnvelope
    connect?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
  }

  export type OperatorUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<OperatorCreateWithoutSellerInput, OperatorUncheckedCreateWithoutSellerInput> | OperatorCreateWithoutSellerInput[] | OperatorUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutSellerInput | OperatorCreateOrConnectWithoutSellerInput[]
    createMany?: OperatorCreateManySellerInputEnvelope
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
  }

  export type CatalogUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<CatalogCreateWithoutSellerInput, CatalogUncheckedCreateWithoutSellerInput> | CatalogCreateWithoutSellerInput[] | CatalogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: CatalogCreateOrConnectWithoutSellerInput | CatalogCreateOrConnectWithoutSellerInput[]
    createMany?: CatalogCreateManySellerInputEnvelope
    connect?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
  }

  export type OperationUpdateOneWithoutSellersNestedInput = {
    create?: XOR<OperationCreateWithoutSellersInput, OperationUncheckedCreateWithoutSellersInput>
    connectOrCreate?: OperationCreateOrConnectWithoutSellersInput
    upsert?: OperationUpsertWithoutSellersInput
    disconnect?: OperationWhereInput | boolean
    delete?: OperationWhereInput | boolean
    connect?: OperationWhereUniqueInput
    update?: XOR<XOR<OperationUpdateToOneWithWhereWithoutSellersInput, OperationUpdateWithoutSellersInput>, OperationUncheckedUpdateWithoutSellersInput>
  }

  export type OperatorUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OperatorCreateWithoutSellerInput, OperatorUncheckedCreateWithoutSellerInput> | OperatorCreateWithoutSellerInput[] | OperatorUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutSellerInput | OperatorCreateOrConnectWithoutSellerInput[]
    upsert?: OperatorUpsertWithWhereUniqueWithoutSellerInput | OperatorUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OperatorCreateManySellerInputEnvelope
    set?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    disconnect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    delete?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    update?: OperatorUpdateWithWhereUniqueWithoutSellerInput | OperatorUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OperatorUpdateManyWithWhereWithoutSellerInput | OperatorUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
  }

  export type CatalogUpdateManyWithoutSellerNestedInput = {
    create?: XOR<CatalogCreateWithoutSellerInput, CatalogUncheckedCreateWithoutSellerInput> | CatalogCreateWithoutSellerInput[] | CatalogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: CatalogCreateOrConnectWithoutSellerInput | CatalogCreateOrConnectWithoutSellerInput[]
    upsert?: CatalogUpsertWithWhereUniqueWithoutSellerInput | CatalogUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: CatalogCreateManySellerInputEnvelope
    set?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    disconnect?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    delete?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    connect?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    update?: CatalogUpdateWithWhereUniqueWithoutSellerInput | CatalogUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: CatalogUpdateManyWithWhereWithoutSellerInput | CatalogUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: CatalogScalarWhereInput | CatalogScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OperatorUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OperatorCreateWithoutSellerInput, OperatorUncheckedCreateWithoutSellerInput> | OperatorCreateWithoutSellerInput[] | OperatorUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutSellerInput | OperatorCreateOrConnectWithoutSellerInput[]
    upsert?: OperatorUpsertWithWhereUniqueWithoutSellerInput | OperatorUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OperatorCreateManySellerInputEnvelope
    set?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    disconnect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    delete?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    update?: OperatorUpdateWithWhereUniqueWithoutSellerInput | OperatorUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OperatorUpdateManyWithWhereWithoutSellerInput | OperatorUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
  }

  export type CatalogUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<CatalogCreateWithoutSellerInput, CatalogUncheckedCreateWithoutSellerInput> | CatalogCreateWithoutSellerInput[] | CatalogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: CatalogCreateOrConnectWithoutSellerInput | CatalogCreateOrConnectWithoutSellerInput[]
    upsert?: CatalogUpsertWithWhereUniqueWithoutSellerInput | CatalogUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: CatalogCreateManySellerInputEnvelope
    set?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    disconnect?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    delete?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    connect?: CatalogWhereUniqueInput | CatalogWhereUniqueInput[]
    update?: CatalogUpdateWithWhereUniqueWithoutSellerInput | CatalogUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: CatalogUpdateManyWithWhereWithoutSellerInput | CatalogUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: CatalogScalarWhereInput | CatalogScalarWhereInput[]
  }

  export type SellerCreateNestedOneWithoutOperatorsInput = {
    create?: XOR<SellerCreateWithoutOperatorsInput, SellerUncheckedCreateWithoutOperatorsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutOperatorsInput
    connect?: SellerWhereUniqueInput
  }

  export type WorkAssignmentCreateNestedManyWithoutOperatorInput = {
    create?: XOR<WorkAssignmentCreateWithoutOperatorInput, WorkAssignmentUncheckedCreateWithoutOperatorInput> | WorkAssignmentCreateWithoutOperatorInput[] | WorkAssignmentUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutOperatorInput | WorkAssignmentCreateOrConnectWithoutOperatorInput[]
    createMany?: WorkAssignmentCreateManyOperatorInputEnvelope
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
  }

  export type WorkAssignmentUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<WorkAssignmentCreateWithoutOperatorInput, WorkAssignmentUncheckedCreateWithoutOperatorInput> | WorkAssignmentCreateWithoutOperatorInput[] | WorkAssignmentUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutOperatorInput | WorkAssignmentCreateOrConnectWithoutOperatorInput[]
    createMany?: WorkAssignmentCreateManyOperatorInputEnvelope
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
  }

  export type SellerUpdateOneRequiredWithoutOperatorsNestedInput = {
    create?: XOR<SellerCreateWithoutOperatorsInput, SellerUncheckedCreateWithoutOperatorsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutOperatorsInput
    upsert?: SellerUpsertWithoutOperatorsInput
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutOperatorsInput, SellerUpdateWithoutOperatorsInput>, SellerUncheckedUpdateWithoutOperatorsInput>
  }

  export type WorkAssignmentUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<WorkAssignmentCreateWithoutOperatorInput, WorkAssignmentUncheckedCreateWithoutOperatorInput> | WorkAssignmentCreateWithoutOperatorInput[] | WorkAssignmentUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutOperatorInput | WorkAssignmentCreateOrConnectWithoutOperatorInput[]
    upsert?: WorkAssignmentUpsertWithWhereUniqueWithoutOperatorInput | WorkAssignmentUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: WorkAssignmentCreateManyOperatorInputEnvelope
    set?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    disconnect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    delete?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    update?: WorkAssignmentUpdateWithWhereUniqueWithoutOperatorInput | WorkAssignmentUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: WorkAssignmentUpdateManyWithWhereWithoutOperatorInput | WorkAssignmentUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: WorkAssignmentScalarWhereInput | WorkAssignmentScalarWhereInput[]
  }

  export type WorkAssignmentUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<WorkAssignmentCreateWithoutOperatorInput, WorkAssignmentUncheckedCreateWithoutOperatorInput> | WorkAssignmentCreateWithoutOperatorInput[] | WorkAssignmentUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutOperatorInput | WorkAssignmentCreateOrConnectWithoutOperatorInput[]
    upsert?: WorkAssignmentUpsertWithWhereUniqueWithoutOperatorInput | WorkAssignmentUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: WorkAssignmentCreateManyOperatorInputEnvelope
    set?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    disconnect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    delete?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    update?: WorkAssignmentUpdateWithWhereUniqueWithoutOperatorInput | WorkAssignmentUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: WorkAssignmentUpdateManyWithWhereWithoutOperatorInput | WorkAssignmentUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: WorkAssignmentScalarWhereInput | WorkAssignmentScalarWhereInput[]
  }

  export type SellerCreateNestedOneWithoutCatalogsInput = {
    create?: XOR<SellerCreateWithoutCatalogsInput, SellerUncheckedCreateWithoutCatalogsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutCatalogsInput
    connect?: SellerWhereUniqueInput
  }

  export type CatalogItemCreateNestedManyWithoutCatalogInput = {
    create?: XOR<CatalogItemCreateWithoutCatalogInput, CatalogItemUncheckedCreateWithoutCatalogInput> | CatalogItemCreateWithoutCatalogInput[] | CatalogItemUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutCatalogInput | CatalogItemCreateOrConnectWithoutCatalogInput[]
    createMany?: CatalogItemCreateManyCatalogInputEnvelope
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
  }

  export type WorkAssignmentCreateNestedManyWithoutCatalogInput = {
    create?: XOR<WorkAssignmentCreateWithoutCatalogInput, WorkAssignmentUncheckedCreateWithoutCatalogInput> | WorkAssignmentCreateWithoutCatalogInput[] | WorkAssignmentUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutCatalogInput | WorkAssignmentCreateOrConnectWithoutCatalogInput[]
    createMany?: WorkAssignmentCreateManyCatalogInputEnvelope
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
  }

  export type CatalogItemUncheckedCreateNestedManyWithoutCatalogInput = {
    create?: XOR<CatalogItemCreateWithoutCatalogInput, CatalogItemUncheckedCreateWithoutCatalogInput> | CatalogItemCreateWithoutCatalogInput[] | CatalogItemUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutCatalogInput | CatalogItemCreateOrConnectWithoutCatalogInput[]
    createMany?: CatalogItemCreateManyCatalogInputEnvelope
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
  }

  export type WorkAssignmentUncheckedCreateNestedManyWithoutCatalogInput = {
    create?: XOR<WorkAssignmentCreateWithoutCatalogInput, WorkAssignmentUncheckedCreateWithoutCatalogInput> | WorkAssignmentCreateWithoutCatalogInput[] | WorkAssignmentUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutCatalogInput | WorkAssignmentCreateOrConnectWithoutCatalogInput[]
    createMany?: WorkAssignmentCreateManyCatalogInputEnvelope
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
  }

  export type SellerUpdateOneRequiredWithoutCatalogsNestedInput = {
    create?: XOR<SellerCreateWithoutCatalogsInput, SellerUncheckedCreateWithoutCatalogsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutCatalogsInput
    upsert?: SellerUpsertWithoutCatalogsInput
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutCatalogsInput, SellerUpdateWithoutCatalogsInput>, SellerUncheckedUpdateWithoutCatalogsInput>
  }

  export type CatalogItemUpdateManyWithoutCatalogNestedInput = {
    create?: XOR<CatalogItemCreateWithoutCatalogInput, CatalogItemUncheckedCreateWithoutCatalogInput> | CatalogItemCreateWithoutCatalogInput[] | CatalogItemUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutCatalogInput | CatalogItemCreateOrConnectWithoutCatalogInput[]
    upsert?: CatalogItemUpsertWithWhereUniqueWithoutCatalogInput | CatalogItemUpsertWithWhereUniqueWithoutCatalogInput[]
    createMany?: CatalogItemCreateManyCatalogInputEnvelope
    set?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    disconnect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    delete?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    update?: CatalogItemUpdateWithWhereUniqueWithoutCatalogInput | CatalogItemUpdateWithWhereUniqueWithoutCatalogInput[]
    updateMany?: CatalogItemUpdateManyWithWhereWithoutCatalogInput | CatalogItemUpdateManyWithWhereWithoutCatalogInput[]
    deleteMany?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
  }

  export type WorkAssignmentUpdateManyWithoutCatalogNestedInput = {
    create?: XOR<WorkAssignmentCreateWithoutCatalogInput, WorkAssignmentUncheckedCreateWithoutCatalogInput> | WorkAssignmentCreateWithoutCatalogInput[] | WorkAssignmentUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutCatalogInput | WorkAssignmentCreateOrConnectWithoutCatalogInput[]
    upsert?: WorkAssignmentUpsertWithWhereUniqueWithoutCatalogInput | WorkAssignmentUpsertWithWhereUniqueWithoutCatalogInput[]
    createMany?: WorkAssignmentCreateManyCatalogInputEnvelope
    set?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    disconnect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    delete?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    update?: WorkAssignmentUpdateWithWhereUniqueWithoutCatalogInput | WorkAssignmentUpdateWithWhereUniqueWithoutCatalogInput[]
    updateMany?: WorkAssignmentUpdateManyWithWhereWithoutCatalogInput | WorkAssignmentUpdateManyWithWhereWithoutCatalogInput[]
    deleteMany?: WorkAssignmentScalarWhereInput | WorkAssignmentScalarWhereInput[]
  }

  export type CatalogItemUncheckedUpdateManyWithoutCatalogNestedInput = {
    create?: XOR<CatalogItemCreateWithoutCatalogInput, CatalogItemUncheckedCreateWithoutCatalogInput> | CatalogItemCreateWithoutCatalogInput[] | CatalogItemUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutCatalogInput | CatalogItemCreateOrConnectWithoutCatalogInput[]
    upsert?: CatalogItemUpsertWithWhereUniqueWithoutCatalogInput | CatalogItemUpsertWithWhereUniqueWithoutCatalogInput[]
    createMany?: CatalogItemCreateManyCatalogInputEnvelope
    set?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    disconnect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    delete?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    update?: CatalogItemUpdateWithWhereUniqueWithoutCatalogInput | CatalogItemUpdateWithWhereUniqueWithoutCatalogInput[]
    updateMany?: CatalogItemUpdateManyWithWhereWithoutCatalogInput | CatalogItemUpdateManyWithWhereWithoutCatalogInput[]
    deleteMany?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
  }

  export type WorkAssignmentUncheckedUpdateManyWithoutCatalogNestedInput = {
    create?: XOR<WorkAssignmentCreateWithoutCatalogInput, WorkAssignmentUncheckedCreateWithoutCatalogInput> | WorkAssignmentCreateWithoutCatalogInput[] | WorkAssignmentUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: WorkAssignmentCreateOrConnectWithoutCatalogInput | WorkAssignmentCreateOrConnectWithoutCatalogInput[]
    upsert?: WorkAssignmentUpsertWithWhereUniqueWithoutCatalogInput | WorkAssignmentUpsertWithWhereUniqueWithoutCatalogInput[]
    createMany?: WorkAssignmentCreateManyCatalogInputEnvelope
    set?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    disconnect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    delete?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    connect?: WorkAssignmentWhereUniqueInput | WorkAssignmentWhereUniqueInput[]
    update?: WorkAssignmentUpdateWithWhereUniqueWithoutCatalogInput | WorkAssignmentUpdateWithWhereUniqueWithoutCatalogInput[]
    updateMany?: WorkAssignmentUpdateManyWithWhereWithoutCatalogInput | WorkAssignmentUpdateManyWithWhereWithoutCatalogInput[]
    deleteMany?: WorkAssignmentScalarWhereInput | WorkAssignmentScalarWhereInput[]
  }

  export type CatalogCreateNestedOneWithoutItemsInput = {
    create?: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutItemsInput
    connect?: CatalogWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CatalogUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutItemsInput
    upsert?: CatalogUpsertWithoutItemsInput
    connect?: CatalogWhereUniqueInput
    update?: XOR<XOR<CatalogUpdateToOneWithWhereWithoutItemsInput, CatalogUpdateWithoutItemsInput>, CatalogUncheckedUpdateWithoutItemsInput>
  }

  export type OperatorCreateNestedOneWithoutWorkAssignmentInput = {
    create?: XOR<OperatorCreateWithoutWorkAssignmentInput, OperatorUncheckedCreateWithoutWorkAssignmentInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutWorkAssignmentInput
    connect?: OperatorWhereUniqueInput
  }

  export type CatalogCreateNestedOneWithoutWorkAssignmentInput = {
    create?: XOR<CatalogCreateWithoutWorkAssignmentInput, CatalogUncheckedCreateWithoutWorkAssignmentInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutWorkAssignmentInput
    connect?: CatalogWhereUniqueInput
  }

  export type OperatorUpdateOneRequiredWithoutWorkAssignmentNestedInput = {
    create?: XOR<OperatorCreateWithoutWorkAssignmentInput, OperatorUncheckedCreateWithoutWorkAssignmentInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutWorkAssignmentInput
    upsert?: OperatorUpsertWithoutWorkAssignmentInput
    connect?: OperatorWhereUniqueInput
    update?: XOR<XOR<OperatorUpdateToOneWithWhereWithoutWorkAssignmentInput, OperatorUpdateWithoutWorkAssignmentInput>, OperatorUncheckedUpdateWithoutWorkAssignmentInput>
  }

  export type CatalogUpdateOneRequiredWithoutWorkAssignmentNestedInput = {
    create?: XOR<CatalogCreateWithoutWorkAssignmentInput, CatalogUncheckedCreateWithoutWorkAssignmentInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutWorkAssignmentInput
    upsert?: CatalogUpsertWithoutWorkAssignmentInput
    connect?: CatalogWhereUniqueInput
    update?: XOR<XOR<CatalogUpdateToOneWithWhereWithoutWorkAssignmentInput, CatalogUpdateWithoutWorkAssignmentInput>, CatalogUncheckedUpdateWithoutWorkAssignmentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SellerCreateWithoutOperationInput = {
    id?: string
    name: string
    cpf: string
    operators?: OperatorCreateNestedManyWithoutSellerInput
    catalogs?: CatalogCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateWithoutOperationInput = {
    id?: string
    name: string
    cpf: string
    operators?: OperatorUncheckedCreateNestedManyWithoutSellerInput
    catalogs?: CatalogUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerCreateOrConnectWithoutOperationInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutOperationInput, SellerUncheckedCreateWithoutOperationInput>
  }

  export type SellerCreateManyOperationInputEnvelope = {
    data: SellerCreateManyOperationInput | SellerCreateManyOperationInput[]
    skipDuplicates?: boolean
  }

  export type SellerUpsertWithWhereUniqueWithoutOperationInput = {
    where: SellerWhereUniqueInput
    update: XOR<SellerUpdateWithoutOperationInput, SellerUncheckedUpdateWithoutOperationInput>
    create: XOR<SellerCreateWithoutOperationInput, SellerUncheckedCreateWithoutOperationInput>
  }

  export type SellerUpdateWithWhereUniqueWithoutOperationInput = {
    where: SellerWhereUniqueInput
    data: XOR<SellerUpdateWithoutOperationInput, SellerUncheckedUpdateWithoutOperationInput>
  }

  export type SellerUpdateManyWithWhereWithoutOperationInput = {
    where: SellerScalarWhereInput
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyWithoutOperationInput>
  }

  export type SellerScalarWhereInput = {
    AND?: SellerScalarWhereInput | SellerScalarWhereInput[]
    OR?: SellerScalarWhereInput[]
    NOT?: SellerScalarWhereInput | SellerScalarWhereInput[]
    id?: StringFilter<"Seller"> | string
    name?: StringFilter<"Seller"> | string
    cpf?: StringFilter<"Seller"> | string
    operationId?: StringNullableFilter<"Seller"> | string | null
  }

  export type OperationCreateWithoutSellersInput = {
    id?: string
    name: string
    date: Date | string
    status: string
  }

  export type OperationUncheckedCreateWithoutSellersInput = {
    id?: string
    name: string
    date: Date | string
    status: string
  }

  export type OperationCreateOrConnectWithoutSellersInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutSellersInput, OperationUncheckedCreateWithoutSellersInput>
  }

  export type OperatorCreateWithoutSellerInput = {
    id?: string
    name: string
    WorkAssignment?: WorkAssignmentCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateWithoutSellerInput = {
    id?: string
    name: string
    WorkAssignment?: WorkAssignmentUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorCreateOrConnectWithoutSellerInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutSellerInput, OperatorUncheckedCreateWithoutSellerInput>
  }

  export type OperatorCreateManySellerInputEnvelope = {
    data: OperatorCreateManySellerInput | OperatorCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type CatalogCreateWithoutSellerInput = {
    id?: string
    name: string
    type: string
    items?: CatalogItemCreateNestedManyWithoutCatalogInput
    WorkAssignment?: WorkAssignmentCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUncheckedCreateWithoutSellerInput = {
    id?: string
    name: string
    type: string
    items?: CatalogItemUncheckedCreateNestedManyWithoutCatalogInput
    WorkAssignment?: WorkAssignmentUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutSellerInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutSellerInput, CatalogUncheckedCreateWithoutSellerInput>
  }

  export type CatalogCreateManySellerInputEnvelope = {
    data: CatalogCreateManySellerInput | CatalogCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type OperationUpsertWithoutSellersInput = {
    update: XOR<OperationUpdateWithoutSellersInput, OperationUncheckedUpdateWithoutSellersInput>
    create: XOR<OperationCreateWithoutSellersInput, OperationUncheckedCreateWithoutSellersInput>
    where?: OperationWhereInput
  }

  export type OperationUpdateToOneWithWhereWithoutSellersInput = {
    where?: OperationWhereInput
    data: XOR<OperationUpdateWithoutSellersInput, OperationUncheckedUpdateWithoutSellersInput>
  }

  export type OperationUpdateWithoutSellersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OperationUncheckedUpdateWithoutSellersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OperatorUpsertWithWhereUniqueWithoutSellerInput = {
    where: OperatorWhereUniqueInput
    update: XOR<OperatorUpdateWithoutSellerInput, OperatorUncheckedUpdateWithoutSellerInput>
    create: XOR<OperatorCreateWithoutSellerInput, OperatorUncheckedCreateWithoutSellerInput>
  }

  export type OperatorUpdateWithWhereUniqueWithoutSellerInput = {
    where: OperatorWhereUniqueInput
    data: XOR<OperatorUpdateWithoutSellerInput, OperatorUncheckedUpdateWithoutSellerInput>
  }

  export type OperatorUpdateManyWithWhereWithoutSellerInput = {
    where: OperatorScalarWhereInput
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyWithoutSellerInput>
  }

  export type OperatorScalarWhereInput = {
    AND?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
    OR?: OperatorScalarWhereInput[]
    NOT?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
    id?: StringFilter<"Operator"> | string
    name?: StringFilter<"Operator"> | string
    sellerId?: StringFilter<"Operator"> | string
  }

  export type CatalogUpsertWithWhereUniqueWithoutSellerInput = {
    where: CatalogWhereUniqueInput
    update: XOR<CatalogUpdateWithoutSellerInput, CatalogUncheckedUpdateWithoutSellerInput>
    create: XOR<CatalogCreateWithoutSellerInput, CatalogUncheckedCreateWithoutSellerInput>
  }

  export type CatalogUpdateWithWhereUniqueWithoutSellerInput = {
    where: CatalogWhereUniqueInput
    data: XOR<CatalogUpdateWithoutSellerInput, CatalogUncheckedUpdateWithoutSellerInput>
  }

  export type CatalogUpdateManyWithWhereWithoutSellerInput = {
    where: CatalogScalarWhereInput
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyWithoutSellerInput>
  }

  export type CatalogScalarWhereInput = {
    AND?: CatalogScalarWhereInput | CatalogScalarWhereInput[]
    OR?: CatalogScalarWhereInput[]
    NOT?: CatalogScalarWhereInput | CatalogScalarWhereInput[]
    id?: StringFilter<"Catalog"> | string
    name?: StringFilter<"Catalog"> | string
    type?: StringFilter<"Catalog"> | string
    sellerId?: StringFilter<"Catalog"> | string
  }

  export type SellerCreateWithoutOperatorsInput = {
    id?: string
    name: string
    cpf: string
    Operation?: OperationCreateNestedOneWithoutSellersInput
    catalogs?: CatalogCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateWithoutOperatorsInput = {
    id?: string
    name: string
    cpf: string
    operationId?: string | null
    catalogs?: CatalogUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerCreateOrConnectWithoutOperatorsInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutOperatorsInput, SellerUncheckedCreateWithoutOperatorsInput>
  }

  export type WorkAssignmentCreateWithoutOperatorInput = {
    id?: string
    role: string
    catalog: CatalogCreateNestedOneWithoutWorkAssignmentInput
  }

  export type WorkAssignmentUncheckedCreateWithoutOperatorInput = {
    id?: string
    catalogId: string
    role: string
  }

  export type WorkAssignmentCreateOrConnectWithoutOperatorInput = {
    where: WorkAssignmentWhereUniqueInput
    create: XOR<WorkAssignmentCreateWithoutOperatorInput, WorkAssignmentUncheckedCreateWithoutOperatorInput>
  }

  export type WorkAssignmentCreateManyOperatorInputEnvelope = {
    data: WorkAssignmentCreateManyOperatorInput | WorkAssignmentCreateManyOperatorInput[]
    skipDuplicates?: boolean
  }

  export type SellerUpsertWithoutOperatorsInput = {
    update: XOR<SellerUpdateWithoutOperatorsInput, SellerUncheckedUpdateWithoutOperatorsInput>
    create: XOR<SellerCreateWithoutOperatorsInput, SellerUncheckedCreateWithoutOperatorsInput>
    where?: SellerWhereInput
  }

  export type SellerUpdateToOneWithWhereWithoutOperatorsInput = {
    where?: SellerWhereInput
    data: XOR<SellerUpdateWithoutOperatorsInput, SellerUncheckedUpdateWithoutOperatorsInput>
  }

  export type SellerUpdateWithoutOperatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    Operation?: OperationUpdateOneWithoutSellersNestedInput
    catalogs?: CatalogUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateWithoutOperatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    operationId?: NullableStringFieldUpdateOperationsInput | string | null
    catalogs?: CatalogUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type WorkAssignmentUpsertWithWhereUniqueWithoutOperatorInput = {
    where: WorkAssignmentWhereUniqueInput
    update: XOR<WorkAssignmentUpdateWithoutOperatorInput, WorkAssignmentUncheckedUpdateWithoutOperatorInput>
    create: XOR<WorkAssignmentCreateWithoutOperatorInput, WorkAssignmentUncheckedCreateWithoutOperatorInput>
  }

  export type WorkAssignmentUpdateWithWhereUniqueWithoutOperatorInput = {
    where: WorkAssignmentWhereUniqueInput
    data: XOR<WorkAssignmentUpdateWithoutOperatorInput, WorkAssignmentUncheckedUpdateWithoutOperatorInput>
  }

  export type WorkAssignmentUpdateManyWithWhereWithoutOperatorInput = {
    where: WorkAssignmentScalarWhereInput
    data: XOR<WorkAssignmentUpdateManyMutationInput, WorkAssignmentUncheckedUpdateManyWithoutOperatorInput>
  }

  export type WorkAssignmentScalarWhereInput = {
    AND?: WorkAssignmentScalarWhereInput | WorkAssignmentScalarWhereInput[]
    OR?: WorkAssignmentScalarWhereInput[]
    NOT?: WorkAssignmentScalarWhereInput | WorkAssignmentScalarWhereInput[]
    id?: StringFilter<"WorkAssignment"> | string
    operatorId?: StringFilter<"WorkAssignment"> | string
    catalogId?: StringFilter<"WorkAssignment"> | string
    role?: StringFilter<"WorkAssignment"> | string
  }

  export type SellerCreateWithoutCatalogsInput = {
    id?: string
    name: string
    cpf: string
    Operation?: OperationCreateNestedOneWithoutSellersInput
    operators?: OperatorCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateWithoutCatalogsInput = {
    id?: string
    name: string
    cpf: string
    operationId?: string | null
    operators?: OperatorUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerCreateOrConnectWithoutCatalogsInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutCatalogsInput, SellerUncheckedCreateWithoutCatalogsInput>
  }

  export type CatalogItemCreateWithoutCatalogInput = {
    id?: string
    name: string
    price: number
    category: string
  }

  export type CatalogItemUncheckedCreateWithoutCatalogInput = {
    id?: string
    name: string
    price: number
    category: string
  }

  export type CatalogItemCreateOrConnectWithoutCatalogInput = {
    where: CatalogItemWhereUniqueInput
    create: XOR<CatalogItemCreateWithoutCatalogInput, CatalogItemUncheckedCreateWithoutCatalogInput>
  }

  export type CatalogItemCreateManyCatalogInputEnvelope = {
    data: CatalogItemCreateManyCatalogInput | CatalogItemCreateManyCatalogInput[]
    skipDuplicates?: boolean
  }

  export type WorkAssignmentCreateWithoutCatalogInput = {
    id?: string
    role: string
    operator: OperatorCreateNestedOneWithoutWorkAssignmentInput
  }

  export type WorkAssignmentUncheckedCreateWithoutCatalogInput = {
    id?: string
    operatorId: string
    role: string
  }

  export type WorkAssignmentCreateOrConnectWithoutCatalogInput = {
    where: WorkAssignmentWhereUniqueInput
    create: XOR<WorkAssignmentCreateWithoutCatalogInput, WorkAssignmentUncheckedCreateWithoutCatalogInput>
  }

  export type WorkAssignmentCreateManyCatalogInputEnvelope = {
    data: WorkAssignmentCreateManyCatalogInput | WorkAssignmentCreateManyCatalogInput[]
    skipDuplicates?: boolean
  }

  export type SellerUpsertWithoutCatalogsInput = {
    update: XOR<SellerUpdateWithoutCatalogsInput, SellerUncheckedUpdateWithoutCatalogsInput>
    create: XOR<SellerCreateWithoutCatalogsInput, SellerUncheckedCreateWithoutCatalogsInput>
    where?: SellerWhereInput
  }

  export type SellerUpdateToOneWithWhereWithoutCatalogsInput = {
    where?: SellerWhereInput
    data: XOR<SellerUpdateWithoutCatalogsInput, SellerUncheckedUpdateWithoutCatalogsInput>
  }

  export type SellerUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    Operation?: OperationUpdateOneWithoutSellersNestedInput
    operators?: OperatorUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    operationId?: NullableStringFieldUpdateOperationsInput | string | null
    operators?: OperatorUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type CatalogItemUpsertWithWhereUniqueWithoutCatalogInput = {
    where: CatalogItemWhereUniqueInput
    update: XOR<CatalogItemUpdateWithoutCatalogInput, CatalogItemUncheckedUpdateWithoutCatalogInput>
    create: XOR<CatalogItemCreateWithoutCatalogInput, CatalogItemUncheckedCreateWithoutCatalogInput>
  }

  export type CatalogItemUpdateWithWhereUniqueWithoutCatalogInput = {
    where: CatalogItemWhereUniqueInput
    data: XOR<CatalogItemUpdateWithoutCatalogInput, CatalogItemUncheckedUpdateWithoutCatalogInput>
  }

  export type CatalogItemUpdateManyWithWhereWithoutCatalogInput = {
    where: CatalogItemScalarWhereInput
    data: XOR<CatalogItemUpdateManyMutationInput, CatalogItemUncheckedUpdateManyWithoutCatalogInput>
  }

  export type CatalogItemScalarWhereInput = {
    AND?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
    OR?: CatalogItemScalarWhereInput[]
    NOT?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
    id?: StringFilter<"CatalogItem"> | string
    name?: StringFilter<"CatalogItem"> | string
    price?: FloatFilter<"CatalogItem"> | number
    category?: StringFilter<"CatalogItem"> | string
    catalogId?: StringFilter<"CatalogItem"> | string
  }

  export type WorkAssignmentUpsertWithWhereUniqueWithoutCatalogInput = {
    where: WorkAssignmentWhereUniqueInput
    update: XOR<WorkAssignmentUpdateWithoutCatalogInput, WorkAssignmentUncheckedUpdateWithoutCatalogInput>
    create: XOR<WorkAssignmentCreateWithoutCatalogInput, WorkAssignmentUncheckedCreateWithoutCatalogInput>
  }

  export type WorkAssignmentUpdateWithWhereUniqueWithoutCatalogInput = {
    where: WorkAssignmentWhereUniqueInput
    data: XOR<WorkAssignmentUpdateWithoutCatalogInput, WorkAssignmentUncheckedUpdateWithoutCatalogInput>
  }

  export type WorkAssignmentUpdateManyWithWhereWithoutCatalogInput = {
    where: WorkAssignmentScalarWhereInput
    data: XOR<WorkAssignmentUpdateManyMutationInput, WorkAssignmentUncheckedUpdateManyWithoutCatalogInput>
  }

  export type CatalogCreateWithoutItemsInput = {
    id?: string
    name: string
    type: string
    seller: SellerCreateNestedOneWithoutCatalogsInput
    WorkAssignment?: WorkAssignmentCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    type: string
    sellerId: string
    WorkAssignment?: WorkAssignmentUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutItemsInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
  }

  export type CatalogUpsertWithoutItemsInput = {
    update: XOR<CatalogUpdateWithoutItemsInput, CatalogUncheckedUpdateWithoutItemsInput>
    create: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
    where?: CatalogWhereInput
  }

  export type CatalogUpdateToOneWithWhereWithoutItemsInput = {
    where?: CatalogWhereInput
    data: XOR<CatalogUpdateWithoutItemsInput, CatalogUncheckedUpdateWithoutItemsInput>
  }

  export type CatalogUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    seller?: SellerUpdateOneRequiredWithoutCatalogsNestedInput
    WorkAssignment?: WorkAssignmentUpdateManyWithoutCatalogNestedInput
  }

  export type CatalogUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    WorkAssignment?: WorkAssignmentUncheckedUpdateManyWithoutCatalogNestedInput
  }

  export type OperatorCreateWithoutWorkAssignmentInput = {
    id?: string
    name: string
    seller: SellerCreateNestedOneWithoutOperatorsInput
  }

  export type OperatorUncheckedCreateWithoutWorkAssignmentInput = {
    id?: string
    name: string
    sellerId: string
  }

  export type OperatorCreateOrConnectWithoutWorkAssignmentInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutWorkAssignmentInput, OperatorUncheckedCreateWithoutWorkAssignmentInput>
  }

  export type CatalogCreateWithoutWorkAssignmentInput = {
    id?: string
    name: string
    type: string
    seller: SellerCreateNestedOneWithoutCatalogsInput
    items?: CatalogItemCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUncheckedCreateWithoutWorkAssignmentInput = {
    id?: string
    name: string
    type: string
    sellerId: string
    items?: CatalogItemUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutWorkAssignmentInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutWorkAssignmentInput, CatalogUncheckedCreateWithoutWorkAssignmentInput>
  }

  export type OperatorUpsertWithoutWorkAssignmentInput = {
    update: XOR<OperatorUpdateWithoutWorkAssignmentInput, OperatorUncheckedUpdateWithoutWorkAssignmentInput>
    create: XOR<OperatorCreateWithoutWorkAssignmentInput, OperatorUncheckedCreateWithoutWorkAssignmentInput>
    where?: OperatorWhereInput
  }

  export type OperatorUpdateToOneWithWhereWithoutWorkAssignmentInput = {
    where?: OperatorWhereInput
    data: XOR<OperatorUpdateWithoutWorkAssignmentInput, OperatorUncheckedUpdateWithoutWorkAssignmentInput>
  }

  export type OperatorUpdateWithoutWorkAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seller?: SellerUpdateOneRequiredWithoutOperatorsNestedInput
  }

  export type OperatorUncheckedUpdateWithoutWorkAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUpsertWithoutWorkAssignmentInput = {
    update: XOR<CatalogUpdateWithoutWorkAssignmentInput, CatalogUncheckedUpdateWithoutWorkAssignmentInput>
    create: XOR<CatalogCreateWithoutWorkAssignmentInput, CatalogUncheckedCreateWithoutWorkAssignmentInput>
    where?: CatalogWhereInput
  }

  export type CatalogUpdateToOneWithWhereWithoutWorkAssignmentInput = {
    where?: CatalogWhereInput
    data: XOR<CatalogUpdateWithoutWorkAssignmentInput, CatalogUncheckedUpdateWithoutWorkAssignmentInput>
  }

  export type CatalogUpdateWithoutWorkAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    seller?: SellerUpdateOneRequiredWithoutCatalogsNestedInput
    items?: CatalogItemUpdateManyWithoutCatalogNestedInput
  }

  export type CatalogUncheckedUpdateWithoutWorkAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    items?: CatalogItemUncheckedUpdateManyWithoutCatalogNestedInput
  }

  export type SellerCreateManyOperationInput = {
    id?: string
    name: string
    cpf: string
  }

  export type SellerUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    operators?: OperatorUpdateManyWithoutSellerNestedInput
    catalogs?: CatalogUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    operators?: OperatorUncheckedUpdateManyWithoutSellerNestedInput
    catalogs?: CatalogUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateManyWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type OperatorCreateManySellerInput = {
    id?: string
    name: string
  }

  export type CatalogCreateManySellerInput = {
    id?: string
    name: string
    type: string
  }

  export type OperatorUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WorkAssignment?: WorkAssignmentUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WorkAssignment?: WorkAssignmentUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    items?: CatalogItemUpdateManyWithoutCatalogNestedInput
    WorkAssignment?: WorkAssignmentUpdateManyWithoutCatalogNestedInput
  }

  export type CatalogUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    items?: CatalogItemUncheckedUpdateManyWithoutCatalogNestedInput
    WorkAssignment?: WorkAssignmentUncheckedUpdateManyWithoutCatalogNestedInput
  }

  export type CatalogUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentCreateManyOperatorInput = {
    id?: string
    catalogId: string
    role: string
  }

  export type WorkAssignmentUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    catalog?: CatalogUpdateOneRequiredWithoutWorkAssignmentNestedInput
  }

  export type WorkAssignmentUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogItemCreateManyCatalogInput = {
    id?: string
    name: string
    price: number
    category: string
  }

  export type WorkAssignmentCreateManyCatalogInput = {
    id?: string
    operatorId: string
    role: string
  }

  export type CatalogItemUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogItemUncheckedUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogItemUncheckedUpdateManyWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    operator?: OperatorUpdateOneRequiredWithoutWorkAssignmentNestedInput
  }

  export type WorkAssignmentUncheckedUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkAssignmentUncheckedUpdateManyWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}