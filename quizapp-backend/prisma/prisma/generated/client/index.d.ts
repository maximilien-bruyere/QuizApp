
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Theory
 * 
 */
export type Theory = $Result.DefaultSelection<Prisma.$TheoryPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model MatchingPair
 * 
 */
export type MatchingPair = $Result.DefaultSelection<Prisma.$MatchingPairPayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Flashcard
 * 
 */
export type Flashcard = $Result.DefaultSelection<Prisma.$FlashcardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Difficulty: {
  FACILE: 'FACILE',
  MOYEN: 'MOYEN',
  DIFFICILE: 'DIFFICILE'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const QuizStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type QuizStatus = (typeof QuizStatus)[keyof typeof QuizStatus]


export const FlashcardDifficulty: {
  NOUVEAU: 'NOUVEAU',
  DIFFICILE: 'DIFFICILE',
  MOYEN: 'MOYEN',
  FACILE: 'FACILE',
  ACQUISE: 'ACQUISE'
};

export type FlashcardDifficulty = (typeof FlashcardDifficulty)[keyof typeof FlashcardDifficulty]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type QuizStatus = $Enums.QuizStatus

export const QuizStatus: typeof $Enums.QuizStatus

export type FlashcardDifficulty = $Enums.FlashcardDifficulty

export const FlashcardDifficulty: typeof $Enums.FlashcardDifficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theory`: Exposes CRUD operations for the **Theory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Theories
    * const theories = await prisma.theory.findMany()
    * ```
    */
  get theory(): Prisma.TheoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchingPair`: Exposes CRUD operations for the **MatchingPair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchingPairs
    * const matchingPairs = await prisma.matchingPair.findMany()
    * ```
    */
  get matchingPair(): Prisma.MatchingPairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashcard`: Exposes CRUD operations for the **Flashcard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flashcards
    * const flashcards = await prisma.flashcard.findMany()
    * ```
    */
  get flashcard(): Prisma.FlashcardDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Subject: 'Subject',
    Category: 'Category',
    Theory: 'Theory',
    Quiz: 'Quiz',
    Question: 'Question',
    Option: 'Option',
    MatchingPair: 'MatchingPair',
    QuizAttempt: 'QuizAttempt',
    Answer: 'Answer',
    Flashcard: 'Flashcard'
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
      modelProps: "user" | "subject" | "category" | "theory" | "quiz" | "question" | "option" | "matchingPair" | "quizAttempt" | "answer" | "flashcard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Theory: {
        payload: Prisma.$TheoryPayload<ExtArgs>
        fields: Prisma.TheoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TheoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TheoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>
          }
          findFirst: {
            args: Prisma.TheoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TheoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>
          }
          findMany: {
            args: Prisma.TheoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>[]
          }
          create: {
            args: Prisma.TheoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>
          }
          createMany: {
            args: Prisma.TheoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TheoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>[]
          }
          delete: {
            args: Prisma.TheoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>
          }
          update: {
            args: Prisma.TheoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>
          }
          deleteMany: {
            args: Prisma.TheoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TheoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TheoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>[]
          }
          upsert: {
            args: Prisma.TheoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheoryPayload>
          }
          aggregate: {
            args: Prisma.TheoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheory>
          }
          groupBy: {
            args: Prisma.TheoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TheoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TheoryCountArgs<ExtArgs>
            result: $Utils.Optional<TheoryCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      MatchingPair: {
        payload: Prisma.$MatchingPairPayload<ExtArgs>
        fields: Prisma.MatchingPairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchingPairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchingPairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>
          }
          findFirst: {
            args: Prisma.MatchingPairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchingPairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>
          }
          findMany: {
            args: Prisma.MatchingPairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>[]
          }
          create: {
            args: Prisma.MatchingPairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>
          }
          createMany: {
            args: Prisma.MatchingPairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchingPairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>[]
          }
          delete: {
            args: Prisma.MatchingPairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>
          }
          update: {
            args: Prisma.MatchingPairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>
          }
          deleteMany: {
            args: Prisma.MatchingPairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchingPairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchingPairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>[]
          }
          upsert: {
            args: Prisma.MatchingPairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingPairPayload>
          }
          aggregate: {
            args: Prisma.MatchingPairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchingPair>
          }
          groupBy: {
            args: Prisma.MatchingPairGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchingPairGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchingPairCountArgs<ExtArgs>
            result: $Utils.Optional<MatchingPairCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Flashcard: {
        payload: Prisma.$FlashcardPayload<ExtArgs>
        fields: Prisma.FlashcardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashcardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashcardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findFirst: {
            args: Prisma.FlashcardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashcardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findMany: {
            args: Prisma.FlashcardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          create: {
            args: Prisma.FlashcardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          createMany: {
            args: Prisma.FlashcardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashcardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          delete: {
            args: Prisma.FlashcardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          update: {
            args: Prisma.FlashcardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          deleteMany: {
            args: Prisma.FlashcardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashcardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashcardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          upsert: {
            args: Prisma.FlashcardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          aggregate: {
            args: Prisma.FlashcardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashcard>
          }
          groupBy: {
            args: Prisma.FlashcardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashcardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashcardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashcardCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    subject?: SubjectOmit
    category?: CategoryOmit
    theory?: TheoryOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    option?: OptionOmit
    matchingPair?: MatchingPairOmit
    quizAttempt?: QuizAttemptOmit
    answer?: AnswerOmit
    flashcard?: FlashcardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quizAttempts: number
    flashcards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempts?: boolean | UserCountOutputTypeCountQuizAttemptsArgs
    flashcards?: boolean | UserCountOutputTypeCountFlashcardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    quizzes: number
    categories: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | SubjectCountOutputTypeCountQuizzesArgs
    categories?: boolean | SubjectCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    theories: number
    quizzes: number
    flashcards: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theories?: boolean | CategoryCountOutputTypeCountTheoriesArgs
    quizzes?: boolean | CategoryCountOutputTypeCountQuizzesArgs
    flashcards?: boolean | CategoryCountOutputTypeCountFlashcardsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTheoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
  }


  /**
   * Count Type TheoryCountOutputType
   */

  export type TheoryCountOutputType = {
    subTheories: number
  }

  export type TheoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subTheories?: boolean | TheoryCountOutputTypeCountSubTheoriesArgs
  }

  // Custom InputTypes
  /**
   * TheoryCountOutputType without action
   */
  export type TheoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TheoryCountOutputType
     */
    select?: TheoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TheoryCountOutputType without action
   */
  export type TheoryCountOutputTypeCountSubTheoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheoryWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    quizAttempts: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    quizAttempts?: boolean | QuizCountOutputTypeCountQuizAttemptsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    options: number
    answers: number
    pairs: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    pairs?: boolean | QuestionCountOutputTypeCountPairsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchingPairWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    answers: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | OptionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuizAttemptCountOutputType
   */

  export type QuizAttemptCountOutputType = {
    answers: number
  }

  export type QuizAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuizAttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuizAttemptCountOutputType without action
   */
  export type QuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptCountOutputType
     */
    select?: QuizAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizAttemptCountOutputType without action
   */
  export type QuizAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    name: string | null
    created_at: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    name: string | null
    created_at: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    name: number
    created_at: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    name?: true
    created_at?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    name?: true
    created_at?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    name?: true
    created_at?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    password: string
    name: string
    created_at: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    role?: boolean
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    flashcards?: boolean | User$flashcardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password" | "name" | "created_at" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    flashcards?: boolean | User$flashcardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      flashcards: Prisma.$FlashcardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
      name: string
      created_at: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizAttempts<T extends User$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flashcards<T extends User$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, User$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.quizAttempts
   */
  export type User$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * User.flashcards
   */
  export type User$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    cursor?: FlashcardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    subject_id: number | null
  }

  export type SubjectSumAggregateOutputType = {
    subject_id: number | null
  }

  export type SubjectMinAggregateOutputType = {
    subject_id: number | null
    name: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    subject_id: number | null
    name: string | null
  }

  export type SubjectCountAggregateOutputType = {
    subject_id: number
    name: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    subject_id?: true
  }

  export type SubjectSumAggregateInputType = {
    subject_id?: true
  }

  export type SubjectMinAggregateInputType = {
    subject_id?: true
    name?: true
  }

  export type SubjectMaxAggregateInputType = {
    subject_id?: true
    name?: true
  }

  export type SubjectCountAggregateInputType = {
    subject_id?: true
    name?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    subject_id: number
    name: string
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subject_id?: boolean
    name?: boolean
    quizzes?: boolean | Subject$quizzesArgs<ExtArgs>
    categories?: boolean | Subject$categoriesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subject_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subject_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    subject_id?: boolean
    name?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subject_id" | "name", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | Subject$quizzesArgs<ExtArgs>
    categories?: boolean | Subject$categoriesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      subject_id: number
      name: string
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `subject_id`
     * const subjectWithSubject_idOnly = await prisma.subject.findMany({ select: { subject_id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `subject_id`
     * const subjectWithSubject_idOnly = await prisma.subject.createManyAndReturn({
     *   select: { subject_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `subject_id`
     * const subjectWithSubject_idOnly = await prisma.subject.updateManyAndReturn({
     *   select: { subject_id: true },
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends Subject$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Subject$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly subject_id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.quizzes
   */
  export type Subject$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Subject.categories
   */
  export type Subject$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
    subject_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
    subject_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    subject_id: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    subject_id: number | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    name: number
    subject_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
    subject_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
    subject_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    name?: true
    subject_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    name?: true
    subject_id?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    name?: true
    subject_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    name: string
    subject_id: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    subject_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    theories?: boolean | Category$theoriesArgs<ExtArgs>
    quizzes?: boolean | Category$quizzesArgs<ExtArgs>
    flashcards?: boolean | Category$flashcardsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    subject_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    subject_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    category_id?: boolean
    name?: boolean
    subject_id?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "subject_id", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    theories?: boolean | Category$theoriesArgs<ExtArgs>
    quizzes?: boolean | Category$quizzesArgs<ExtArgs>
    flashcards?: boolean | Category$flashcardsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      theories: Prisma.$TheoryPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      flashcards: Prisma.$FlashcardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
      subject_id: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theories<T extends Category$theoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$theoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends Category$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Category$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flashcards<T extends Category$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, Category$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly category_id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly subject_id: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.theories
   */
  export type Category$theoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    where?: TheoryWhereInput
    orderBy?: TheoryOrderByWithRelationInput | TheoryOrderByWithRelationInput[]
    cursor?: TheoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TheoryScalarFieldEnum | TheoryScalarFieldEnum[]
  }

  /**
   * Category.quizzes
   */
  export type Category$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Category.flashcards
   */
  export type Category$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    cursor?: FlashcardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Theory
   */

  export type AggregateTheory = {
    _count: TheoryCountAggregateOutputType | null
    _avg: TheoryAvgAggregateOutputType | null
    _sum: TheorySumAggregateOutputType | null
    _min: TheoryMinAggregateOutputType | null
    _max: TheoryMaxAggregateOutputType | null
  }

  export type TheoryAvgAggregateOutputType = {
    theory_id: number | null
    category_id: number | null
    parent_id: number | null
  }

  export type TheorySumAggregateOutputType = {
    theory_id: number | null
    category_id: number | null
    parent_id: number | null
  }

  export type TheoryMinAggregateOutputType = {
    theory_id: number | null
    title: string | null
    content: string | null
    pdf_files: string | null
    created_at: Date | null
    category_id: number | null
    parent_id: number | null
  }

  export type TheoryMaxAggregateOutputType = {
    theory_id: number | null
    title: string | null
    content: string | null
    pdf_files: string | null
    created_at: Date | null
    category_id: number | null
    parent_id: number | null
  }

  export type TheoryCountAggregateOutputType = {
    theory_id: number
    title: number
    content: number
    pdf_files: number
    created_at: number
    category_id: number
    parent_id: number
    _all: number
  }


  export type TheoryAvgAggregateInputType = {
    theory_id?: true
    category_id?: true
    parent_id?: true
  }

  export type TheorySumAggregateInputType = {
    theory_id?: true
    category_id?: true
    parent_id?: true
  }

  export type TheoryMinAggregateInputType = {
    theory_id?: true
    title?: true
    content?: true
    pdf_files?: true
    created_at?: true
    category_id?: true
    parent_id?: true
  }

  export type TheoryMaxAggregateInputType = {
    theory_id?: true
    title?: true
    content?: true
    pdf_files?: true
    created_at?: true
    category_id?: true
    parent_id?: true
  }

  export type TheoryCountAggregateInputType = {
    theory_id?: true
    title?: true
    content?: true
    pdf_files?: true
    created_at?: true
    category_id?: true
    parent_id?: true
    _all?: true
  }

  export type TheoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theory to aggregate.
     */
    where?: TheoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theories to fetch.
     */
    orderBy?: TheoryOrderByWithRelationInput | TheoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TheoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Theories
    **/
    _count?: true | TheoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TheoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TheorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TheoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TheoryMaxAggregateInputType
  }

  export type GetTheoryAggregateType<T extends TheoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTheory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheory[P]>
      : GetScalarType<T[P], AggregateTheory[P]>
  }




  export type TheoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheoryWhereInput
    orderBy?: TheoryOrderByWithAggregationInput | TheoryOrderByWithAggregationInput[]
    by: TheoryScalarFieldEnum[] | TheoryScalarFieldEnum
    having?: TheoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TheoryCountAggregateInputType | true
    _avg?: TheoryAvgAggregateInputType
    _sum?: TheorySumAggregateInputType
    _min?: TheoryMinAggregateInputType
    _max?: TheoryMaxAggregateInputType
  }

  export type TheoryGroupByOutputType = {
    theory_id: number
    title: string
    content: string
    pdf_files: string | null
    created_at: Date
    category_id: number
    parent_id: number | null
    _count: TheoryCountAggregateOutputType | null
    _avg: TheoryAvgAggregateOutputType | null
    _sum: TheorySumAggregateOutputType | null
    _min: TheoryMinAggregateOutputType | null
    _max: TheoryMaxAggregateOutputType | null
  }

  type GetTheoryGroupByPayload<T extends TheoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TheoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TheoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TheoryGroupByOutputType[P]>
            : GetScalarType<T[P], TheoryGroupByOutputType[P]>
        }
      >
    >


  export type TheorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theory_id?: boolean
    title?: boolean
    content?: boolean
    pdf_files?: boolean
    created_at?: boolean
    category_id?: boolean
    parent_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    parent?: boolean | Theory$parentArgs<ExtArgs>
    subTheories?: boolean | Theory$subTheoriesArgs<ExtArgs>
    _count?: boolean | TheoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theory"]>

  export type TheorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theory_id?: boolean
    title?: boolean
    content?: boolean
    pdf_files?: boolean
    created_at?: boolean
    category_id?: boolean
    parent_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    parent?: boolean | Theory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["theory"]>

  export type TheorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theory_id?: boolean
    title?: boolean
    content?: boolean
    pdf_files?: boolean
    created_at?: boolean
    category_id?: boolean
    parent_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    parent?: boolean | Theory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["theory"]>

  export type TheorySelectScalar = {
    theory_id?: boolean
    title?: boolean
    content?: boolean
    pdf_files?: boolean
    created_at?: boolean
    category_id?: boolean
    parent_id?: boolean
  }

  export type TheoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"theory_id" | "title" | "content" | "pdf_files" | "created_at" | "category_id" | "parent_id", ExtArgs["result"]["theory"]>
  export type TheoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    parent?: boolean | Theory$parentArgs<ExtArgs>
    subTheories?: boolean | Theory$subTheoriesArgs<ExtArgs>
    _count?: boolean | TheoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TheoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    parent?: boolean | Theory$parentArgs<ExtArgs>
  }
  export type TheoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    parent?: boolean | Theory$parentArgs<ExtArgs>
  }

  export type $TheoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      parent: Prisma.$TheoryPayload<ExtArgs> | null
      subTheories: Prisma.$TheoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      theory_id: number
      title: string
      content: string
      pdf_files: string | null
      created_at: Date
      category_id: number
      parent_id: number | null
    }, ExtArgs["result"]["theory"]>
    composites: {}
  }

  type TheoryGetPayload<S extends boolean | null | undefined | TheoryDefaultArgs> = $Result.GetResult<Prisma.$TheoryPayload, S>

  type TheoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TheoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TheoryCountAggregateInputType | true
    }

  export interface TheoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theory'], meta: { name: 'Theory' } }
    /**
     * Find zero or one Theory that matches the filter.
     * @param {TheoryFindUniqueArgs} args - Arguments to find a Theory
     * @example
     * // Get one Theory
     * const theory = await prisma.theory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TheoryFindUniqueArgs>(args: SelectSubset<T, TheoryFindUniqueArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TheoryFindUniqueOrThrowArgs} args - Arguments to find a Theory
     * @example
     * // Get one Theory
     * const theory = await prisma.theory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TheoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TheoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryFindFirstArgs} args - Arguments to find a Theory
     * @example
     * // Get one Theory
     * const theory = await prisma.theory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TheoryFindFirstArgs>(args?: SelectSubset<T, TheoryFindFirstArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryFindFirstOrThrowArgs} args - Arguments to find a Theory
     * @example
     * // Get one Theory
     * const theory = await prisma.theory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TheoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TheoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Theories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Theories
     * const theories = await prisma.theory.findMany()
     * 
     * // Get first 10 Theories
     * const theories = await prisma.theory.findMany({ take: 10 })
     * 
     * // Only select the `theory_id`
     * const theoryWithTheory_idOnly = await prisma.theory.findMany({ select: { theory_id: true } })
     * 
     */
    findMany<T extends TheoryFindManyArgs>(args?: SelectSubset<T, TheoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theory.
     * @param {TheoryCreateArgs} args - Arguments to create a Theory.
     * @example
     * // Create one Theory
     * const Theory = await prisma.theory.create({
     *   data: {
     *     // ... data to create a Theory
     *   }
     * })
     * 
     */
    create<T extends TheoryCreateArgs>(args: SelectSubset<T, TheoryCreateArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Theories.
     * @param {TheoryCreateManyArgs} args - Arguments to create many Theories.
     * @example
     * // Create many Theories
     * const theory = await prisma.theory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TheoryCreateManyArgs>(args?: SelectSubset<T, TheoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Theories and returns the data saved in the database.
     * @param {TheoryCreateManyAndReturnArgs} args - Arguments to create many Theories.
     * @example
     * // Create many Theories
     * const theory = await prisma.theory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Theories and only return the `theory_id`
     * const theoryWithTheory_idOnly = await prisma.theory.createManyAndReturn({
     *   select: { theory_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TheoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TheoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theory.
     * @param {TheoryDeleteArgs} args - Arguments to delete one Theory.
     * @example
     * // Delete one Theory
     * const Theory = await prisma.theory.delete({
     *   where: {
     *     // ... filter to delete one Theory
     *   }
     * })
     * 
     */
    delete<T extends TheoryDeleteArgs>(args: SelectSubset<T, TheoryDeleteArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theory.
     * @param {TheoryUpdateArgs} args - Arguments to update one Theory.
     * @example
     * // Update one Theory
     * const theory = await prisma.theory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TheoryUpdateArgs>(args: SelectSubset<T, TheoryUpdateArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Theories.
     * @param {TheoryDeleteManyArgs} args - Arguments to filter Theories to delete.
     * @example
     * // Delete a few Theories
     * const { count } = await prisma.theory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TheoryDeleteManyArgs>(args?: SelectSubset<T, TheoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Theories
     * const theory = await prisma.theory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TheoryUpdateManyArgs>(args: SelectSubset<T, TheoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theories and returns the data updated in the database.
     * @param {TheoryUpdateManyAndReturnArgs} args - Arguments to update many Theories.
     * @example
     * // Update many Theories
     * const theory = await prisma.theory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Theories and only return the `theory_id`
     * const theoryWithTheory_idOnly = await prisma.theory.updateManyAndReturn({
     *   select: { theory_id: true },
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
    updateManyAndReturn<T extends TheoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TheoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theory.
     * @param {TheoryUpsertArgs} args - Arguments to update or create a Theory.
     * @example
     * // Update or create a Theory
     * const theory = await prisma.theory.upsert({
     *   create: {
     *     // ... data to create a Theory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theory we want to update
     *   }
     * })
     */
    upsert<T extends TheoryUpsertArgs>(args: SelectSubset<T, TheoryUpsertArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Theories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryCountArgs} args - Arguments to filter Theories to count.
     * @example
     * // Count the number of Theories
     * const count = await prisma.theory.count({
     *   where: {
     *     // ... the filter for the Theories we want to count
     *   }
     * })
    **/
    count<T extends TheoryCountArgs>(
      args?: Subset<T, TheoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TheoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TheoryAggregateArgs>(args: Subset<T, TheoryAggregateArgs>): Prisma.PrismaPromise<GetTheoryAggregateType<T>>

    /**
     * Group by Theory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheoryGroupByArgs} args - Group by arguments.
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
      T extends TheoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TheoryGroupByArgs['orderBy'] }
        : { orderBy?: TheoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TheoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTheoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theory model
   */
  readonly fields: TheoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TheoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Theory$parentArgs<ExtArgs> = {}>(args?: Subset<T, Theory$parentArgs<ExtArgs>>): Prisma__TheoryClient<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subTheories<T extends Theory$subTheoriesArgs<ExtArgs> = {}>(args?: Subset<T, Theory$subTheoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Theory model
   */
  interface TheoryFieldRefs {
    readonly theory_id: FieldRef<"Theory", 'Int'>
    readonly title: FieldRef<"Theory", 'String'>
    readonly content: FieldRef<"Theory", 'String'>
    readonly pdf_files: FieldRef<"Theory", 'String'>
    readonly created_at: FieldRef<"Theory", 'DateTime'>
    readonly category_id: FieldRef<"Theory", 'Int'>
    readonly parent_id: FieldRef<"Theory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Theory findUnique
   */
  export type TheoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * Filter, which Theory to fetch.
     */
    where: TheoryWhereUniqueInput
  }

  /**
   * Theory findUniqueOrThrow
   */
  export type TheoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * Filter, which Theory to fetch.
     */
    where: TheoryWhereUniqueInput
  }

  /**
   * Theory findFirst
   */
  export type TheoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * Filter, which Theory to fetch.
     */
    where?: TheoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theories to fetch.
     */
    orderBy?: TheoryOrderByWithRelationInput | TheoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theories.
     */
    cursor?: TheoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theories.
     */
    distinct?: TheoryScalarFieldEnum | TheoryScalarFieldEnum[]
  }

  /**
   * Theory findFirstOrThrow
   */
  export type TheoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * Filter, which Theory to fetch.
     */
    where?: TheoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theories to fetch.
     */
    orderBy?: TheoryOrderByWithRelationInput | TheoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theories.
     */
    cursor?: TheoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theories.
     */
    distinct?: TheoryScalarFieldEnum | TheoryScalarFieldEnum[]
  }

  /**
   * Theory findMany
   */
  export type TheoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * Filter, which Theories to fetch.
     */
    where?: TheoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theories to fetch.
     */
    orderBy?: TheoryOrderByWithRelationInput | TheoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Theories.
     */
    cursor?: TheoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theories.
     */
    skip?: number
    distinct?: TheoryScalarFieldEnum | TheoryScalarFieldEnum[]
  }

  /**
   * Theory create
   */
  export type TheoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Theory.
     */
    data: XOR<TheoryCreateInput, TheoryUncheckedCreateInput>
  }

  /**
   * Theory createMany
   */
  export type TheoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Theories.
     */
    data: TheoryCreateManyInput | TheoryCreateManyInput[]
  }

  /**
   * Theory createManyAndReturn
   */
  export type TheoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * The data used to create many Theories.
     */
    data: TheoryCreateManyInput | TheoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Theory update
   */
  export type TheoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Theory.
     */
    data: XOR<TheoryUpdateInput, TheoryUncheckedUpdateInput>
    /**
     * Choose, which Theory to update.
     */
    where: TheoryWhereUniqueInput
  }

  /**
   * Theory updateMany
   */
  export type TheoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Theories.
     */
    data: XOR<TheoryUpdateManyMutationInput, TheoryUncheckedUpdateManyInput>
    /**
     * Filter which Theories to update
     */
    where?: TheoryWhereInput
    /**
     * Limit how many Theories to update.
     */
    limit?: number
  }

  /**
   * Theory updateManyAndReturn
   */
  export type TheoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * The data used to update Theories.
     */
    data: XOR<TheoryUpdateManyMutationInput, TheoryUncheckedUpdateManyInput>
    /**
     * Filter which Theories to update
     */
    where?: TheoryWhereInput
    /**
     * Limit how many Theories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Theory upsert
   */
  export type TheoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Theory to update in case it exists.
     */
    where: TheoryWhereUniqueInput
    /**
     * In case the Theory found by the `where` argument doesn't exist, create a new Theory with this data.
     */
    create: XOR<TheoryCreateInput, TheoryUncheckedCreateInput>
    /**
     * In case the Theory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TheoryUpdateInput, TheoryUncheckedUpdateInput>
  }

  /**
   * Theory delete
   */
  export type TheoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    /**
     * Filter which Theory to delete.
     */
    where: TheoryWhereUniqueInput
  }

  /**
   * Theory deleteMany
   */
  export type TheoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theories to delete
     */
    where?: TheoryWhereInput
    /**
     * Limit how many Theories to delete.
     */
    limit?: number
  }

  /**
   * Theory.parent
   */
  export type Theory$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    where?: TheoryWhereInput
  }

  /**
   * Theory.subTheories
   */
  export type Theory$subTheoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
    where?: TheoryWhereInput
    orderBy?: TheoryOrderByWithRelationInput | TheoryOrderByWithRelationInput[]
    cursor?: TheoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TheoryScalarFieldEnum | TheoryScalarFieldEnum[]
  }

  /**
   * Theory without action
   */
  export type TheoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theory
     */
    select?: TheorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theory
     */
    omit?: TheoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheoryInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    quiz_id: number | null
    time_limit: number | null
    subject_id: number | null
    category_id: number | null
  }

  export type QuizSumAggregateOutputType = {
    quiz_id: number | null
    time_limit: number | null
    subject_id: number | null
    category_id: number | null
  }

  export type QuizMinAggregateOutputType = {
    quiz_id: number | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    time_limit: number | null
    is_exam_mode: boolean | null
    created_at: Date | null
    updated_at: Date | null
    subject_id: number | null
    category_id: number | null
  }

  export type QuizMaxAggregateOutputType = {
    quiz_id: number | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    time_limit: number | null
    is_exam_mode: boolean | null
    created_at: Date | null
    updated_at: Date | null
    subject_id: number | null
    category_id: number | null
  }

  export type QuizCountAggregateOutputType = {
    quiz_id: number
    title: number
    description: number
    difficulty: number
    time_limit: number
    is_exam_mode: number
    created_at: number
    updated_at: number
    subject_id: number
    category_id: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    quiz_id?: true
    time_limit?: true
    subject_id?: true
    category_id?: true
  }

  export type QuizSumAggregateInputType = {
    quiz_id?: true
    time_limit?: true
    subject_id?: true
    category_id?: true
  }

  export type QuizMinAggregateInputType = {
    quiz_id?: true
    title?: true
    description?: true
    difficulty?: true
    time_limit?: true
    is_exam_mode?: true
    created_at?: true
    updated_at?: true
    subject_id?: true
    category_id?: true
  }

  export type QuizMaxAggregateInputType = {
    quiz_id?: true
    title?: true
    description?: true
    difficulty?: true
    time_limit?: true
    is_exam_mode?: true
    created_at?: true
    updated_at?: true
    subject_id?: true
    category_id?: true
  }

  export type QuizCountAggregateInputType = {
    quiz_id?: true
    title?: true
    description?: true
    difficulty?: true
    time_limit?: true
    is_exam_mode?: true
    created_at?: true
    updated_at?: true
    subject_id?: true
    category_id?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    quiz_id: number
    title: string
    description: string | null
    difficulty: $Enums.Difficulty | null
    time_limit: number | null
    is_exam_mode: boolean
    created_at: Date | null
    updated_at: Date | null
    subject_id: number
    category_id: number
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quiz_id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    time_limit?: boolean
    is_exam_mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    subject_id?: boolean
    category_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    quizAttempts?: boolean | Quiz$quizAttemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quiz_id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    time_limit?: boolean
    is_exam_mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    subject_id?: boolean
    category_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quiz_id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    time_limit?: boolean
    is_exam_mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    subject_id?: boolean
    category_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    quiz_id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    time_limit?: boolean
    is_exam_mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    subject_id?: boolean
    category_id?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"quiz_id" | "title" | "description" | "difficulty" | "time_limit" | "is_exam_mode" | "created_at" | "updated_at" | "subject_id" | "category_id", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    quizAttempts?: boolean | Quiz$quizAttemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      quiz_id: number
      title: string
      description: string | null
      difficulty: $Enums.Difficulty | null
      time_limit: number | null
      is_exam_mode: boolean
      created_at: Date | null
      updated_at: Date | null
      subject_id: number
      category_id: number
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `quiz_id`
     * const quizWithQuiz_idOnly = await prisma.quiz.findMany({ select: { quiz_id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `quiz_id`
     * const quizWithQuiz_idOnly = await prisma.quiz.createManyAndReturn({
     *   select: { quiz_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `quiz_id`
     * const quizWithQuiz_idOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { quiz_id: true },
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
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizAttempts<T extends Quiz$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly quiz_id: FieldRef<"Quiz", 'Int'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly difficulty: FieldRef<"Quiz", 'Difficulty'>
    readonly time_limit: FieldRef<"Quiz", 'Int'>
    readonly is_exam_mode: FieldRef<"Quiz", 'Boolean'>
    readonly created_at: FieldRef<"Quiz", 'DateTime'>
    readonly updated_at: FieldRef<"Quiz", 'DateTime'>
    readonly subject_id: FieldRef<"Quiz", 'Int'>
    readonly category_id: FieldRef<"Quiz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.quizAttempts
   */
  export type Quiz$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    question_id: number | null
    quiz_id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    question_id: number | null
    quiz_id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    question_id: number | null
    content: string | null
    type: string | null
    quiz_id: number | null
    image_url: string | null
    explanation: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    question_id: number | null
    content: string | null
    type: string | null
    quiz_id: number | null
    image_url: string | null
    explanation: string | null
  }

  export type QuestionCountAggregateOutputType = {
    question_id: number
    content: number
    type: number
    quiz_id: number
    image_url: number
    explanation: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    question_id?: true
    quiz_id?: true
  }

  export type QuestionSumAggregateInputType = {
    question_id?: true
    quiz_id?: true
  }

  export type QuestionMinAggregateInputType = {
    question_id?: true
    content?: true
    type?: true
    quiz_id?: true
    image_url?: true
    explanation?: true
  }

  export type QuestionMaxAggregateInputType = {
    question_id?: true
    content?: true
    type?: true
    quiz_id?: true
    image_url?: true
    explanation?: true
  }

  export type QuestionCountAggregateInputType = {
    question_id?: true
    content?: true
    type?: true
    quiz_id?: true
    image_url?: true
    explanation?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    question_id: number
    content: string
    type: string
    quiz_id: number
    image_url: string | null
    explanation: string | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    content?: boolean
    type?: boolean
    quiz_id?: boolean
    image_url?: boolean
    explanation?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    pairs?: boolean | Question$pairsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    content?: boolean
    type?: boolean
    quiz_id?: boolean
    image_url?: boolean
    explanation?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    content?: boolean
    type?: boolean
    quiz_id?: boolean
    image_url?: boolean
    explanation?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    question_id?: boolean
    content?: boolean
    type?: boolean
    quiz_id?: boolean
    image_url?: boolean
    explanation?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"question_id" | "content" | "type" | "quiz_id" | "image_url" | "explanation", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    pairs?: boolean | Question$pairsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      pairs: Prisma.$MatchingPairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      question_id: number
      content: string
      type: string
      quiz_id: number
      image_url: string | null
      explanation: string | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `question_id`
     * const questionWithQuestion_idOnly = await prisma.question.findMany({ select: { question_id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `question_id`
     * const questionWithQuestion_idOnly = await prisma.question.createManyAndReturn({
     *   select: { question_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `question_id`
     * const questionWithQuestion_idOnly = await prisma.question.updateManyAndReturn({
     *   select: { question_id: true },
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pairs<T extends Question$pairsArgs<ExtArgs> = {}>(args?: Subset<T, Question$pairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly question_id: FieldRef<"Question", 'Int'>
    readonly content: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'String'>
    readonly quiz_id: FieldRef<"Question", 'Int'>
    readonly image_url: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.pairs
   */
  export type Question$pairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    where?: MatchingPairWhereInput
    orderBy?: MatchingPairOrderByWithRelationInput | MatchingPairOrderByWithRelationInput[]
    cursor?: MatchingPairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchingPairScalarFieldEnum | MatchingPairScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    option_id: number | null
    question_id: number | null
  }

  export type OptionSumAggregateOutputType = {
    option_id: number | null
    question_id: number | null
  }

  export type OptionMinAggregateOutputType = {
    option_id: number | null
    text: string | null
    is_correct: boolean | null
    question_id: number | null
  }

  export type OptionMaxAggregateOutputType = {
    option_id: number | null
    text: string | null
    is_correct: boolean | null
    question_id: number | null
  }

  export type OptionCountAggregateOutputType = {
    option_id: number
    text: number
    is_correct: number
    question_id: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    option_id?: true
    question_id?: true
  }

  export type OptionSumAggregateInputType = {
    option_id?: true
    question_id?: true
  }

  export type OptionMinAggregateInputType = {
    option_id?: true
    text?: true
    is_correct?: true
    question_id?: true
  }

  export type OptionMaxAggregateInputType = {
    option_id?: true
    text?: true
    is_correct?: true
    question_id?: true
  }

  export type OptionCountAggregateInputType = {
    option_id?: true
    text?: true
    is_correct?: true
    question_id?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    option_id: number
    text: string
    is_correct: boolean
    question_id: number
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    option_id?: boolean
    text?: boolean
    is_correct?: boolean
    question_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answers?: boolean | Option$answersArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    option_id?: boolean
    text?: boolean
    is_correct?: boolean
    question_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    option_id?: boolean
    text?: boolean
    is_correct?: boolean
    question_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    option_id?: boolean
    text?: boolean
    is_correct?: boolean
    question_id?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"option_id" | "text" | "is_correct" | "question_id", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answers?: boolean | Option$answersArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      option_id: number
      text: string
      is_correct: boolean
      question_id: number
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `option_id`
     * const optionWithOption_idOnly = await prisma.option.findMany({ select: { option_id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `option_id`
     * const optionWithOption_idOnly = await prisma.option.createManyAndReturn({
     *   select: { option_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `option_id`
     * const optionWithOption_idOnly = await prisma.option.updateManyAndReturn({
     *   select: { option_id: true },
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
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Option$answersArgs<ExtArgs> = {}>(args?: Subset<T, Option$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly option_id: FieldRef<"Option", 'Int'>
    readonly text: FieldRef<"Option", 'String'>
    readonly is_correct: FieldRef<"Option", 'Boolean'>
    readonly question_id: FieldRef<"Option", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.answers
   */
  export type Option$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model MatchingPair
   */

  export type AggregateMatchingPair = {
    _count: MatchingPairCountAggregateOutputType | null
    _avg: MatchingPairAvgAggregateOutputType | null
    _sum: MatchingPairSumAggregateOutputType | null
    _min: MatchingPairMinAggregateOutputType | null
    _max: MatchingPairMaxAggregateOutputType | null
  }

  export type MatchingPairAvgAggregateOutputType = {
    pair_id: number | null
    question_id: number | null
  }

  export type MatchingPairSumAggregateOutputType = {
    pair_id: number | null
    question_id: number | null
  }

  export type MatchingPairMinAggregateOutputType = {
    pair_id: number | null
    left: string | null
    right: string | null
    question_id: number | null
  }

  export type MatchingPairMaxAggregateOutputType = {
    pair_id: number | null
    left: string | null
    right: string | null
    question_id: number | null
  }

  export type MatchingPairCountAggregateOutputType = {
    pair_id: number
    left: number
    right: number
    question_id: number
    _all: number
  }


  export type MatchingPairAvgAggregateInputType = {
    pair_id?: true
    question_id?: true
  }

  export type MatchingPairSumAggregateInputType = {
    pair_id?: true
    question_id?: true
  }

  export type MatchingPairMinAggregateInputType = {
    pair_id?: true
    left?: true
    right?: true
    question_id?: true
  }

  export type MatchingPairMaxAggregateInputType = {
    pair_id?: true
    left?: true
    right?: true
    question_id?: true
  }

  export type MatchingPairCountAggregateInputType = {
    pair_id?: true
    left?: true
    right?: true
    question_id?: true
    _all?: true
  }

  export type MatchingPairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingPair to aggregate.
     */
    where?: MatchingPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingPairs to fetch.
     */
    orderBy?: MatchingPairOrderByWithRelationInput | MatchingPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchingPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchingPairs
    **/
    _count?: true | MatchingPairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchingPairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchingPairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchingPairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchingPairMaxAggregateInputType
  }

  export type GetMatchingPairAggregateType<T extends MatchingPairAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchingPair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchingPair[P]>
      : GetScalarType<T[P], AggregateMatchingPair[P]>
  }




  export type MatchingPairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchingPairWhereInput
    orderBy?: MatchingPairOrderByWithAggregationInput | MatchingPairOrderByWithAggregationInput[]
    by: MatchingPairScalarFieldEnum[] | MatchingPairScalarFieldEnum
    having?: MatchingPairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchingPairCountAggregateInputType | true
    _avg?: MatchingPairAvgAggregateInputType
    _sum?: MatchingPairSumAggregateInputType
    _min?: MatchingPairMinAggregateInputType
    _max?: MatchingPairMaxAggregateInputType
  }

  export type MatchingPairGroupByOutputType = {
    pair_id: number
    left: string
    right: string
    question_id: number
    _count: MatchingPairCountAggregateOutputType | null
    _avg: MatchingPairAvgAggregateOutputType | null
    _sum: MatchingPairSumAggregateOutputType | null
    _min: MatchingPairMinAggregateOutputType | null
    _max: MatchingPairMaxAggregateOutputType | null
  }

  type GetMatchingPairGroupByPayload<T extends MatchingPairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchingPairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchingPairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchingPairGroupByOutputType[P]>
            : GetScalarType<T[P], MatchingPairGroupByOutputType[P]>
        }
      >
    >


  export type MatchingPairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pair_id?: boolean
    left?: boolean
    right?: boolean
    question_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchingPair"]>

  export type MatchingPairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pair_id?: boolean
    left?: boolean
    right?: boolean
    question_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchingPair"]>

  export type MatchingPairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pair_id?: boolean
    left?: boolean
    right?: boolean
    question_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchingPair"]>

  export type MatchingPairSelectScalar = {
    pair_id?: boolean
    left?: boolean
    right?: boolean
    question_id?: boolean
  }

  export type MatchingPairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pair_id" | "left" | "right" | "question_id", ExtArgs["result"]["matchingPair"]>
  export type MatchingPairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type MatchingPairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type MatchingPairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $MatchingPairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchingPair"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pair_id: number
      left: string
      right: string
      question_id: number
    }, ExtArgs["result"]["matchingPair"]>
    composites: {}
  }

  type MatchingPairGetPayload<S extends boolean | null | undefined | MatchingPairDefaultArgs> = $Result.GetResult<Prisma.$MatchingPairPayload, S>

  type MatchingPairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchingPairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchingPairCountAggregateInputType | true
    }

  export interface MatchingPairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchingPair'], meta: { name: 'MatchingPair' } }
    /**
     * Find zero or one MatchingPair that matches the filter.
     * @param {MatchingPairFindUniqueArgs} args - Arguments to find a MatchingPair
     * @example
     * // Get one MatchingPair
     * const matchingPair = await prisma.matchingPair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchingPairFindUniqueArgs>(args: SelectSubset<T, MatchingPairFindUniqueArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchingPair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchingPairFindUniqueOrThrowArgs} args - Arguments to find a MatchingPair
     * @example
     * // Get one MatchingPair
     * const matchingPair = await prisma.matchingPair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchingPairFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchingPairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchingPair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairFindFirstArgs} args - Arguments to find a MatchingPair
     * @example
     * // Get one MatchingPair
     * const matchingPair = await prisma.matchingPair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchingPairFindFirstArgs>(args?: SelectSubset<T, MatchingPairFindFirstArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchingPair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairFindFirstOrThrowArgs} args - Arguments to find a MatchingPair
     * @example
     * // Get one MatchingPair
     * const matchingPair = await prisma.matchingPair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchingPairFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchingPairFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchingPairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchingPairs
     * const matchingPairs = await prisma.matchingPair.findMany()
     * 
     * // Get first 10 MatchingPairs
     * const matchingPairs = await prisma.matchingPair.findMany({ take: 10 })
     * 
     * // Only select the `pair_id`
     * const matchingPairWithPair_idOnly = await prisma.matchingPair.findMany({ select: { pair_id: true } })
     * 
     */
    findMany<T extends MatchingPairFindManyArgs>(args?: SelectSubset<T, MatchingPairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchingPair.
     * @param {MatchingPairCreateArgs} args - Arguments to create a MatchingPair.
     * @example
     * // Create one MatchingPair
     * const MatchingPair = await prisma.matchingPair.create({
     *   data: {
     *     // ... data to create a MatchingPair
     *   }
     * })
     * 
     */
    create<T extends MatchingPairCreateArgs>(args: SelectSubset<T, MatchingPairCreateArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchingPairs.
     * @param {MatchingPairCreateManyArgs} args - Arguments to create many MatchingPairs.
     * @example
     * // Create many MatchingPairs
     * const matchingPair = await prisma.matchingPair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchingPairCreateManyArgs>(args?: SelectSubset<T, MatchingPairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchingPairs and returns the data saved in the database.
     * @param {MatchingPairCreateManyAndReturnArgs} args - Arguments to create many MatchingPairs.
     * @example
     * // Create many MatchingPairs
     * const matchingPair = await prisma.matchingPair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchingPairs and only return the `pair_id`
     * const matchingPairWithPair_idOnly = await prisma.matchingPair.createManyAndReturn({
     *   select: { pair_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchingPairCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchingPairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchingPair.
     * @param {MatchingPairDeleteArgs} args - Arguments to delete one MatchingPair.
     * @example
     * // Delete one MatchingPair
     * const MatchingPair = await prisma.matchingPair.delete({
     *   where: {
     *     // ... filter to delete one MatchingPair
     *   }
     * })
     * 
     */
    delete<T extends MatchingPairDeleteArgs>(args: SelectSubset<T, MatchingPairDeleteArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchingPair.
     * @param {MatchingPairUpdateArgs} args - Arguments to update one MatchingPair.
     * @example
     * // Update one MatchingPair
     * const matchingPair = await prisma.matchingPair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchingPairUpdateArgs>(args: SelectSubset<T, MatchingPairUpdateArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchingPairs.
     * @param {MatchingPairDeleteManyArgs} args - Arguments to filter MatchingPairs to delete.
     * @example
     * // Delete a few MatchingPairs
     * const { count } = await prisma.matchingPair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchingPairDeleteManyArgs>(args?: SelectSubset<T, MatchingPairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchingPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchingPairs
     * const matchingPair = await prisma.matchingPair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchingPairUpdateManyArgs>(args: SelectSubset<T, MatchingPairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchingPairs and returns the data updated in the database.
     * @param {MatchingPairUpdateManyAndReturnArgs} args - Arguments to update many MatchingPairs.
     * @example
     * // Update many MatchingPairs
     * const matchingPair = await prisma.matchingPair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchingPairs and only return the `pair_id`
     * const matchingPairWithPair_idOnly = await prisma.matchingPair.updateManyAndReturn({
     *   select: { pair_id: true },
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
    updateManyAndReturn<T extends MatchingPairUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchingPairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchingPair.
     * @param {MatchingPairUpsertArgs} args - Arguments to update or create a MatchingPair.
     * @example
     * // Update or create a MatchingPair
     * const matchingPair = await prisma.matchingPair.upsert({
     *   create: {
     *     // ... data to create a MatchingPair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchingPair we want to update
     *   }
     * })
     */
    upsert<T extends MatchingPairUpsertArgs>(args: SelectSubset<T, MatchingPairUpsertArgs<ExtArgs>>): Prisma__MatchingPairClient<$Result.GetResult<Prisma.$MatchingPairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchingPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairCountArgs} args - Arguments to filter MatchingPairs to count.
     * @example
     * // Count the number of MatchingPairs
     * const count = await prisma.matchingPair.count({
     *   where: {
     *     // ... the filter for the MatchingPairs we want to count
     *   }
     * })
    **/
    count<T extends MatchingPairCountArgs>(
      args?: Subset<T, MatchingPairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchingPairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchingPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchingPairAggregateArgs>(args: Subset<T, MatchingPairAggregateArgs>): Prisma.PrismaPromise<GetMatchingPairAggregateType<T>>

    /**
     * Group by MatchingPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingPairGroupByArgs} args - Group by arguments.
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
      T extends MatchingPairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchingPairGroupByArgs['orderBy'] }
        : { orderBy?: MatchingPairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchingPairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchingPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchingPair model
   */
  readonly fields: MatchingPairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchingPair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchingPairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchingPair model
   */
  interface MatchingPairFieldRefs {
    readonly pair_id: FieldRef<"MatchingPair", 'Int'>
    readonly left: FieldRef<"MatchingPair", 'String'>
    readonly right: FieldRef<"MatchingPair", 'String'>
    readonly question_id: FieldRef<"MatchingPair", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MatchingPair findUnique
   */
  export type MatchingPairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * Filter, which MatchingPair to fetch.
     */
    where: MatchingPairWhereUniqueInput
  }

  /**
   * MatchingPair findUniqueOrThrow
   */
  export type MatchingPairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * Filter, which MatchingPair to fetch.
     */
    where: MatchingPairWhereUniqueInput
  }

  /**
   * MatchingPair findFirst
   */
  export type MatchingPairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * Filter, which MatchingPair to fetch.
     */
    where?: MatchingPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingPairs to fetch.
     */
    orderBy?: MatchingPairOrderByWithRelationInput | MatchingPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingPairs.
     */
    cursor?: MatchingPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingPairs.
     */
    distinct?: MatchingPairScalarFieldEnum | MatchingPairScalarFieldEnum[]
  }

  /**
   * MatchingPair findFirstOrThrow
   */
  export type MatchingPairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * Filter, which MatchingPair to fetch.
     */
    where?: MatchingPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingPairs to fetch.
     */
    orderBy?: MatchingPairOrderByWithRelationInput | MatchingPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingPairs.
     */
    cursor?: MatchingPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingPairs.
     */
    distinct?: MatchingPairScalarFieldEnum | MatchingPairScalarFieldEnum[]
  }

  /**
   * MatchingPair findMany
   */
  export type MatchingPairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * Filter, which MatchingPairs to fetch.
     */
    where?: MatchingPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingPairs to fetch.
     */
    orderBy?: MatchingPairOrderByWithRelationInput | MatchingPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchingPairs.
     */
    cursor?: MatchingPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingPairs.
     */
    skip?: number
    distinct?: MatchingPairScalarFieldEnum | MatchingPairScalarFieldEnum[]
  }

  /**
   * MatchingPair create
   */
  export type MatchingPairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchingPair.
     */
    data: XOR<MatchingPairCreateInput, MatchingPairUncheckedCreateInput>
  }

  /**
   * MatchingPair createMany
   */
  export type MatchingPairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchingPairs.
     */
    data: MatchingPairCreateManyInput | MatchingPairCreateManyInput[]
  }

  /**
   * MatchingPair createManyAndReturn
   */
  export type MatchingPairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * The data used to create many MatchingPairs.
     */
    data: MatchingPairCreateManyInput | MatchingPairCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchingPair update
   */
  export type MatchingPairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchingPair.
     */
    data: XOR<MatchingPairUpdateInput, MatchingPairUncheckedUpdateInput>
    /**
     * Choose, which MatchingPair to update.
     */
    where: MatchingPairWhereUniqueInput
  }

  /**
   * MatchingPair updateMany
   */
  export type MatchingPairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchingPairs.
     */
    data: XOR<MatchingPairUpdateManyMutationInput, MatchingPairUncheckedUpdateManyInput>
    /**
     * Filter which MatchingPairs to update
     */
    where?: MatchingPairWhereInput
    /**
     * Limit how many MatchingPairs to update.
     */
    limit?: number
  }

  /**
   * MatchingPair updateManyAndReturn
   */
  export type MatchingPairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * The data used to update MatchingPairs.
     */
    data: XOR<MatchingPairUpdateManyMutationInput, MatchingPairUncheckedUpdateManyInput>
    /**
     * Filter which MatchingPairs to update
     */
    where?: MatchingPairWhereInput
    /**
     * Limit how many MatchingPairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchingPair upsert
   */
  export type MatchingPairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchingPair to update in case it exists.
     */
    where: MatchingPairWhereUniqueInput
    /**
     * In case the MatchingPair found by the `where` argument doesn't exist, create a new MatchingPair with this data.
     */
    create: XOR<MatchingPairCreateInput, MatchingPairUncheckedCreateInput>
    /**
     * In case the MatchingPair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchingPairUpdateInput, MatchingPairUncheckedUpdateInput>
  }

  /**
   * MatchingPair delete
   */
  export type MatchingPairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
    /**
     * Filter which MatchingPair to delete.
     */
    where: MatchingPairWhereUniqueInput
  }

  /**
   * MatchingPair deleteMany
   */
  export type MatchingPairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingPairs to delete
     */
    where?: MatchingPairWhereInput
    /**
     * Limit how many MatchingPairs to delete.
     */
    limit?: number
  }

  /**
   * MatchingPair without action
   */
  export type MatchingPairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingPair
     */
    select?: MatchingPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingPair
     */
    omit?: MatchingPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingPairInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    qa_id: number | null
    score: number | null
    total_questions: number | null
    time_spent: number | null
    user_id: number | null
    quiz_id: number | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    qa_id: number | null
    score: number | null
    total_questions: number | null
    time_spent: number | null
    user_id: number | null
    quiz_id: number | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    qa_id: number | null
    started_at: Date | null
    completed_at: Date | null
    score: number | null
    total_questions: number | null
    time_spent: number | null
    status: $Enums.QuizStatus | null
    user_id: number | null
    quiz_id: number | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    qa_id: number | null
    started_at: Date | null
    completed_at: Date | null
    score: number | null
    total_questions: number | null
    time_spent: number | null
    status: $Enums.QuizStatus | null
    user_id: number | null
    quiz_id: number | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    qa_id: number
    started_at: number
    completed_at: number
    score: number
    total_questions: number
    time_spent: number
    status: number
    user_id: number
    quiz_id: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    qa_id?: true
    score?: true
    total_questions?: true
    time_spent?: true
    user_id?: true
    quiz_id?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    qa_id?: true
    score?: true
    total_questions?: true
    time_spent?: true
    user_id?: true
    quiz_id?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    qa_id?: true
    started_at?: true
    completed_at?: true
    score?: true
    total_questions?: true
    time_spent?: true
    status?: true
    user_id?: true
    quiz_id?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    qa_id?: true
    started_at?: true
    completed_at?: true
    score?: true
    total_questions?: true
    time_spent?: true
    status?: true
    user_id?: true
    quiz_id?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    qa_id?: true
    started_at?: true
    completed_at?: true
    score?: true
    total_questions?: true
    time_spent?: true
    status?: true
    user_id?: true
    quiz_id?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    qa_id: number
    started_at: Date
    completed_at: Date | null
    score: number | null
    total_questions: number | null
    time_spent: number | null
    status: $Enums.QuizStatus
    user_id: number
    quiz_id: number
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qa_id?: boolean
    started_at?: boolean
    completed_at?: boolean
    score?: boolean
    total_questions?: boolean
    time_spent?: boolean
    status?: boolean
    user_id?: boolean
    quiz_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | QuizAttempt$answersArgs<ExtArgs>
    _count?: boolean | QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qa_id?: boolean
    started_at?: boolean
    completed_at?: boolean
    score?: boolean
    total_questions?: boolean
    time_spent?: boolean
    status?: boolean
    user_id?: boolean
    quiz_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qa_id?: boolean
    started_at?: boolean
    completed_at?: boolean
    score?: boolean
    total_questions?: boolean
    time_spent?: boolean
    status?: boolean
    user_id?: boolean
    quiz_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectScalar = {
    qa_id?: boolean
    started_at?: boolean
    completed_at?: boolean
    score?: boolean
    total_questions?: boolean
    time_spent?: boolean
    status?: boolean
    user_id?: boolean
    quiz_id?: boolean
  }

  export type QuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"qa_id" | "started_at" | "completed_at" | "score" | "total_questions" | "time_spent" | "status" | "user_id" | "quiz_id", ExtArgs["result"]["quizAttempt"]>
  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | QuizAttempt$answersArgs<ExtArgs>
    _count?: boolean | QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      qa_id: number
      started_at: Date
      completed_at: Date | null
      score: number | null
      total_questions: number | null
      time_spent: number | null
      status: $Enums.QuizStatus
      user_id: number
      quiz_id: number
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }

  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `qa_id`
     * const quizAttemptWithQa_idOnly = await prisma.quizAttempt.findMany({ select: { qa_id: true } })
     * 
     */
    findMany<T extends QuizAttemptFindManyArgs>(args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptCreateArgs>(args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttempts.
     * @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptCreateManyArgs>(args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAttempts and returns the data saved in the database.
     * @param {QuizAttemptCreateManyAndReturnArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAttempts and only return the `qa_id`
     * const quizAttemptWithQa_idOnly = await prisma.quizAttempt.createManyAndReturn({
     *   select: { qa_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptDeleteArgs>(args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptUpdateArgs>(args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts and returns the data updated in the database.
     * @param {QuizAttemptUpdateManyAndReturnArgs} args - Arguments to update many QuizAttempts.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAttempts and only return the `qa_id`
     * const quizAttemptWithQa_idOnly = await prisma.quizAttempt.updateManyAndReturn({
     *   select: { qa_id: true },
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
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptUpsertArgs>(args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
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
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends QuizAttempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, QuizAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizAttempt model
   */
  interface QuizAttemptFieldRefs {
    readonly qa_id: FieldRef<"QuizAttempt", 'Int'>
    readonly started_at: FieldRef<"QuizAttempt", 'DateTime'>
    readonly completed_at: FieldRef<"QuizAttempt", 'DateTime'>
    readonly score: FieldRef<"QuizAttempt", 'Int'>
    readonly total_questions: FieldRef<"QuizAttempt", 'Int'>
    readonly time_spent: FieldRef<"QuizAttempt", 'Int'>
    readonly status: FieldRef<"QuizAttempt", 'QuizStatus'>
    readonly user_id: FieldRef<"QuizAttempt", 'Int'>
    readonly quiz_id: FieldRef<"QuizAttempt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }

  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
  }

  /**
   * QuizAttempt createManyAndReturn
   */
  export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
  }

  /**
   * QuizAttempt updateManyAndReturn
   */
  export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }

  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * QuizAttempt.answers
   */
  export type QuizAttempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    answer_id: number | null
    option_id: number | null
    question_id: number | null
    qa_id: number | null
  }

  export type AnswerSumAggregateOutputType = {
    answer_id: number | null
    option_id: number | null
    question_id: number | null
    qa_id: number | null
  }

  export type AnswerMinAggregateOutputType = {
    answer_id: number | null
    response_text: string | null
    option_id: number | null
    question_id: number | null
    qa_id: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    answer_id: number | null
    response_text: string | null
    option_id: number | null
    question_id: number | null
    qa_id: number | null
  }

  export type AnswerCountAggregateOutputType = {
    answer_id: number
    response_text: number
    option_id: number
    question_id: number
    qa_id: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    answer_id?: true
    option_id?: true
    question_id?: true
    qa_id?: true
  }

  export type AnswerSumAggregateInputType = {
    answer_id?: true
    option_id?: true
    question_id?: true
    qa_id?: true
  }

  export type AnswerMinAggregateInputType = {
    answer_id?: true
    response_text?: true
    option_id?: true
    question_id?: true
    qa_id?: true
  }

  export type AnswerMaxAggregateInputType = {
    answer_id?: true
    response_text?: true
    option_id?: true
    question_id?: true
    qa_id?: true
  }

  export type AnswerCountAggregateInputType = {
    answer_id?: true
    response_text?: true
    option_id?: true
    question_id?: true
    qa_id?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    answer_id: number
    response_text: string | null
    option_id: number | null
    question_id: number
    qa_id: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answer_id?: boolean
    response_text?: boolean
    option_id?: boolean
    question_id?: boolean
    qa_id?: boolean
    option?: boolean | Answer$optionArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answer_id?: boolean
    response_text?: boolean
    option_id?: boolean
    question_id?: boolean
    qa_id?: boolean
    option?: boolean | Answer$optionArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answer_id?: boolean
    response_text?: boolean
    option_id?: boolean
    question_id?: boolean
    qa_id?: boolean
    option?: boolean | Answer$optionArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    answer_id?: boolean
    response_text?: boolean
    option_id?: boolean
    question_id?: boolean
    qa_id?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"answer_id" | "response_text" | "option_id" | "question_id" | "qa_id", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | Answer$optionArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | Answer$optionArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | Answer$optionArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      option: Prisma.$OptionPayload<ExtArgs> | null
      question: Prisma.$QuestionPayload<ExtArgs>
      quizAttempt: Prisma.$QuizAttemptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      answer_id: number
      response_text: string | null
      option_id: number | null
      question_id: number
      qa_id: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `answer_id`
     * const answerWithAnswer_idOnly = await prisma.answer.findMany({ select: { answer_id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `answer_id`
     * const answerWithAnswer_idOnly = await prisma.answer.createManyAndReturn({
     *   select: { answer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `answer_id`
     * const answerWithAnswer_idOnly = await prisma.answer.updateManyAndReturn({
     *   select: { answer_id: true },
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    option<T extends Answer$optionArgs<ExtArgs> = {}>(args?: Subset<T, Answer$optionArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizAttempt<T extends QuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizAttemptDefaultArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly answer_id: FieldRef<"Answer", 'Int'>
    readonly response_text: FieldRef<"Answer", 'String'>
    readonly option_id: FieldRef<"Answer", 'Int'>
    readonly question_id: FieldRef<"Answer", 'Int'>
    readonly qa_id: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.option
   */
  export type Answer$optionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Flashcard
   */

  export type AggregateFlashcard = {
    _count: FlashcardCountAggregateOutputType | null
    _avg: FlashcardAvgAggregateOutputType | null
    _sum: FlashcardSumAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  export type FlashcardAvgAggregateOutputType = {
    flashcard_id: number | null
    category_id: number | null
    user_id: number | null
  }

  export type FlashcardSumAggregateOutputType = {
    flashcard_id: number | null
    category_id: number | null
    user_id: number | null
  }

  export type FlashcardMinAggregateOutputType = {
    flashcard_id: number | null
    front: string | null
    back: string | null
    difficulty: $Enums.FlashcardDifficulty | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number | null
    user_id: number | null
  }

  export type FlashcardMaxAggregateOutputType = {
    flashcard_id: number | null
    front: string | null
    back: string | null
    difficulty: $Enums.FlashcardDifficulty | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number | null
    user_id: number | null
  }

  export type FlashcardCountAggregateOutputType = {
    flashcard_id: number
    front: number
    back: number
    difficulty: number
    created_at: number
    updated_at: number
    category_id: number
    user_id: number
    _all: number
  }


  export type FlashcardAvgAggregateInputType = {
    flashcard_id?: true
    category_id?: true
    user_id?: true
  }

  export type FlashcardSumAggregateInputType = {
    flashcard_id?: true
    category_id?: true
    user_id?: true
  }

  export type FlashcardMinAggregateInputType = {
    flashcard_id?: true
    front?: true
    back?: true
    difficulty?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    user_id?: true
  }

  export type FlashcardMaxAggregateInputType = {
    flashcard_id?: true
    front?: true
    back?: true
    difficulty?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    user_id?: true
  }

  export type FlashcardCountAggregateInputType = {
    flashcard_id?: true
    front?: true
    back?: true
    difficulty?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    user_id?: true
    _all?: true
  }

  export type FlashcardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcard to aggregate.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flashcards
    **/
    _count?: true | FlashcardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashcardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashcardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashcardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashcardMaxAggregateInputType
  }

  export type GetFlashcardAggregateType<T extends FlashcardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashcard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashcard[P]>
      : GetScalarType<T[P], AggregateFlashcard[P]>
  }




  export type FlashcardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithAggregationInput | FlashcardOrderByWithAggregationInput[]
    by: FlashcardScalarFieldEnum[] | FlashcardScalarFieldEnum
    having?: FlashcardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashcardCountAggregateInputType | true
    _avg?: FlashcardAvgAggregateInputType
    _sum?: FlashcardSumAggregateInputType
    _min?: FlashcardMinAggregateInputType
    _max?: FlashcardMaxAggregateInputType
  }

  export type FlashcardGroupByOutputType = {
    flashcard_id: number
    front: string
    back: string
    difficulty: $Enums.FlashcardDifficulty
    created_at: Date
    updated_at: Date
    category_id: number
    user_id: number
    _count: FlashcardCountAggregateOutputType | null
    _avg: FlashcardAvgAggregateOutputType | null
    _sum: FlashcardSumAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  type GetFlashcardGroupByPayload<T extends FlashcardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashcardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashcardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
        }
      >
    >


  export type FlashcardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashcard_id?: boolean
    front?: boolean
    back?: boolean
    difficulty?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    user_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashcard_id?: boolean
    front?: boolean
    back?: boolean
    difficulty?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    user_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashcard_id?: boolean
    front?: boolean
    back?: boolean
    difficulty?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    user_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectScalar = {
    flashcard_id?: boolean
    front?: boolean
    back?: boolean
    difficulty?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    user_id?: boolean
  }

  export type FlashcardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flashcard_id" | "front" | "back" | "difficulty" | "created_at" | "updated_at" | "category_id" | "user_id", ExtArgs["result"]["flashcard"]>
  export type FlashcardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlashcardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flashcard"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      flashcard_id: number
      front: string
      back: string
      difficulty: $Enums.FlashcardDifficulty
      created_at: Date
      updated_at: Date
      category_id: number
      user_id: number
    }, ExtArgs["result"]["flashcard"]>
    composites: {}
  }

  type FlashcardGetPayload<S extends boolean | null | undefined | FlashcardDefaultArgs> = $Result.GetResult<Prisma.$FlashcardPayload, S>

  type FlashcardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashcardCountAggregateInputType | true
    }

  export interface FlashcardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flashcard'], meta: { name: 'Flashcard' } }
    /**
     * Find zero or one Flashcard that matches the filter.
     * @param {FlashcardFindUniqueArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashcardFindUniqueArgs>(args: SelectSubset<T, FlashcardFindUniqueArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flashcard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashcardFindUniqueOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashcardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashcardFindFirstArgs>(args?: SelectSubset<T, FlashcardFindFirstArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashcardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashcardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flashcards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flashcards
     * const flashcards = await prisma.flashcard.findMany()
     * 
     * // Get first 10 Flashcards
     * const flashcards = await prisma.flashcard.findMany({ take: 10 })
     * 
     * // Only select the `flashcard_id`
     * const flashcardWithFlashcard_idOnly = await prisma.flashcard.findMany({ select: { flashcard_id: true } })
     * 
     */
    findMany<T extends FlashcardFindManyArgs>(args?: SelectSubset<T, FlashcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flashcard.
     * @param {FlashcardCreateArgs} args - Arguments to create a Flashcard.
     * @example
     * // Create one Flashcard
     * const Flashcard = await prisma.flashcard.create({
     *   data: {
     *     // ... data to create a Flashcard
     *   }
     * })
     * 
     */
    create<T extends FlashcardCreateArgs>(args: SelectSubset<T, FlashcardCreateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flashcards.
     * @param {FlashcardCreateManyArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashcardCreateManyArgs>(args?: SelectSubset<T, FlashcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flashcards and returns the data saved in the database.
     * @param {FlashcardCreateManyAndReturnArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flashcards and only return the `flashcard_id`
     * const flashcardWithFlashcard_idOnly = await prisma.flashcard.createManyAndReturn({
     *   select: { flashcard_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashcardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashcardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flashcard.
     * @param {FlashcardDeleteArgs} args - Arguments to delete one Flashcard.
     * @example
     * // Delete one Flashcard
     * const Flashcard = await prisma.flashcard.delete({
     *   where: {
     *     // ... filter to delete one Flashcard
     *   }
     * })
     * 
     */
    delete<T extends FlashcardDeleteArgs>(args: SelectSubset<T, FlashcardDeleteArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flashcard.
     * @param {FlashcardUpdateArgs} args - Arguments to update one Flashcard.
     * @example
     * // Update one Flashcard
     * const flashcard = await prisma.flashcard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashcardUpdateArgs>(args: SelectSubset<T, FlashcardUpdateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flashcards.
     * @param {FlashcardDeleteManyArgs} args - Arguments to filter Flashcards to delete.
     * @example
     * // Delete a few Flashcards
     * const { count } = await prisma.flashcard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashcardDeleteManyArgs>(args?: SelectSubset<T, FlashcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashcardUpdateManyArgs>(args: SelectSubset<T, FlashcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards and returns the data updated in the database.
     * @param {FlashcardUpdateManyAndReturnArgs} args - Arguments to update many Flashcards.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flashcards and only return the `flashcard_id`
     * const flashcardWithFlashcard_idOnly = await prisma.flashcard.updateManyAndReturn({
     *   select: { flashcard_id: true },
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
    updateManyAndReturn<T extends FlashcardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashcardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flashcard.
     * @param {FlashcardUpsertArgs} args - Arguments to update or create a Flashcard.
     * @example
     * // Update or create a Flashcard
     * const flashcard = await prisma.flashcard.upsert({
     *   create: {
     *     // ... data to create a Flashcard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flashcard we want to update
     *   }
     * })
     */
    upsert<T extends FlashcardUpsertArgs>(args: SelectSubset<T, FlashcardUpsertArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardCountArgs} args - Arguments to filter Flashcards to count.
     * @example
     * // Count the number of Flashcards
     * const count = await prisma.flashcard.count({
     *   where: {
     *     // ... the filter for the Flashcards we want to count
     *   }
     * })
    **/
    count<T extends FlashcardCountArgs>(
      args?: Subset<T, FlashcardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashcardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashcardAggregateArgs>(args: Subset<T, FlashcardAggregateArgs>): Prisma.PrismaPromise<GetFlashcardAggregateType<T>>

    /**
     * Group by Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardGroupByArgs} args - Group by arguments.
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
      T extends FlashcardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashcardGroupByArgs['orderBy'] }
        : { orderBy?: FlashcardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlashcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flashcard model
   */
  readonly fields: FlashcardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flashcard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashcardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Flashcard model
   */
  interface FlashcardFieldRefs {
    readonly flashcard_id: FieldRef<"Flashcard", 'Int'>
    readonly front: FieldRef<"Flashcard", 'String'>
    readonly back: FieldRef<"Flashcard", 'String'>
    readonly difficulty: FieldRef<"Flashcard", 'FlashcardDifficulty'>
    readonly created_at: FieldRef<"Flashcard", 'DateTime'>
    readonly updated_at: FieldRef<"Flashcard", 'DateTime'>
    readonly category_id: FieldRef<"Flashcard", 'Int'>
    readonly user_id: FieldRef<"Flashcard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Flashcard findUnique
   */
  export type FlashcardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findUniqueOrThrow
   */
  export type FlashcardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findFirst
   */
  export type FlashcardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findFirstOrThrow
   */
  export type FlashcardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findMany
   */
  export type FlashcardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcards to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard create
   */
  export type FlashcardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to create a Flashcard.
     */
    data: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
  }

  /**
   * Flashcard createMany
   */
  export type FlashcardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
  }

  /**
   * Flashcard createManyAndReturn
   */
  export type FlashcardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flashcard update
   */
  export type FlashcardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to update a Flashcard.
     */
    data: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
    /**
     * Choose, which Flashcard to update.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard updateMany
   */
  export type FlashcardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
  }

  /**
   * Flashcard updateManyAndReturn
   */
  export type FlashcardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flashcard upsert
   */
  export type FlashcardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The filter to search for the Flashcard to update in case it exists.
     */
    where: FlashcardWhereUniqueInput
    /**
     * In case the Flashcard found by the `where` argument doesn't exist, create a new Flashcard with this data.
     */
    create: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
    /**
     * In case the Flashcard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
  }

  /**
   * Flashcard delete
   */
  export type FlashcardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter which Flashcard to delete.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard deleteMany
   */
  export type FlashcardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcards to delete
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to delete.
     */
    limit?: number
  }

  /**
   * Flashcard without action
   */
  export type FlashcardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    name: 'name',
    created_at: 'created_at',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    subject_id: 'subject_id',
    name: 'name'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    subject_id: 'subject_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TheoryScalarFieldEnum: {
    theory_id: 'theory_id',
    title: 'title',
    content: 'content',
    pdf_files: 'pdf_files',
    created_at: 'created_at',
    category_id: 'category_id',
    parent_id: 'parent_id'
  };

  export type TheoryScalarFieldEnum = (typeof TheoryScalarFieldEnum)[keyof typeof TheoryScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    quiz_id: 'quiz_id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    time_limit: 'time_limit',
    is_exam_mode: 'is_exam_mode',
    created_at: 'created_at',
    updated_at: 'updated_at',
    subject_id: 'subject_id',
    category_id: 'category_id'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    question_id: 'question_id',
    content: 'content',
    type: 'type',
    quiz_id: 'quiz_id',
    image_url: 'image_url',
    explanation: 'explanation'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    option_id: 'option_id',
    text: 'text',
    is_correct: 'is_correct',
    question_id: 'question_id'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const MatchingPairScalarFieldEnum: {
    pair_id: 'pair_id',
    left: 'left',
    right: 'right',
    question_id: 'question_id'
  };

  export type MatchingPairScalarFieldEnum = (typeof MatchingPairScalarFieldEnum)[keyof typeof MatchingPairScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    qa_id: 'qa_id',
    started_at: 'started_at',
    completed_at: 'completed_at',
    score: 'score',
    total_questions: 'total_questions',
    time_spent: 'time_spent',
    status: 'status',
    user_id: 'user_id',
    quiz_id: 'quiz_id'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    answer_id: 'answer_id',
    response_text: 'response_text',
    option_id: 'option_id',
    question_id: 'question_id',
    qa_id: 'qa_id'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const FlashcardScalarFieldEnum: {
    flashcard_id: 'flashcard_id',
    front: 'front',
    back: 'back',
    difficulty: 'difficulty',
    created_at: 'created_at',
    updated_at: 'updated_at',
    category_id: 'category_id',
    user_id: 'user_id'
  };

  export type FlashcardScalarFieldEnum = (typeof FlashcardScalarFieldEnum)[keyof typeof FlashcardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuizStatus'
   */
  export type EnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus'>
    


  /**
   * Reference to a field of type 'FlashcardDifficulty'
   */
  export type EnumFlashcardDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlashcardDifficulty'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    quizAttempts?: QuizAttemptListRelationFilter
    flashcards?: FlashcardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
    flashcards?: FlashcardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    quizAttempts?: QuizAttemptListRelationFilter
    flashcards?: FlashcardListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    subject_id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    quizzes?: QuizListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    subject_id?: SortOrder
    name?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    subject_id?: number
    name?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    quizzes?: QuizListRelationFilter
    categories?: CategoryListRelationFilter
  }, "subject_id" | "name">

  export type SubjectOrderByWithAggregationInput = {
    subject_id?: SortOrder
    name?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    subject_id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    subject_id?: IntFilter<"Category"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    theories?: TheoryListRelationFilter
    quizzes?: QuizListRelationFilter
    flashcards?: FlashcardListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    subject_id?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    theories?: TheoryOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
    flashcards?: FlashcardOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    subject_id?: IntFilter<"Category"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    theories?: TheoryListRelationFilter
    quizzes?: QuizListRelationFilter
    flashcards?: FlashcardListRelationFilter
  }, "category_id">

  export type CategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    subject_id?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    subject_id?: IntWithAggregatesFilter<"Category"> | number
  }

  export type TheoryWhereInput = {
    AND?: TheoryWhereInput | TheoryWhereInput[]
    OR?: TheoryWhereInput[]
    NOT?: TheoryWhereInput | TheoryWhereInput[]
    theory_id?: IntFilter<"Theory"> | number
    title?: StringFilter<"Theory"> | string
    content?: StringFilter<"Theory"> | string
    pdf_files?: StringNullableFilter<"Theory"> | string | null
    created_at?: DateTimeFilter<"Theory"> | Date | string
    category_id?: IntFilter<"Theory"> | number
    parent_id?: IntNullableFilter<"Theory"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    parent?: XOR<TheoryNullableScalarRelationFilter, TheoryWhereInput> | null
    subTheories?: TheoryListRelationFilter
  }

  export type TheoryOrderByWithRelationInput = {
    theory_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdf_files?: SortOrderInput | SortOrder
    created_at?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    parent?: TheoryOrderByWithRelationInput
    subTheories?: TheoryOrderByRelationAggregateInput
  }

  export type TheoryWhereUniqueInput = Prisma.AtLeast<{
    theory_id?: number
    AND?: TheoryWhereInput | TheoryWhereInput[]
    OR?: TheoryWhereInput[]
    NOT?: TheoryWhereInput | TheoryWhereInput[]
    title?: StringFilter<"Theory"> | string
    content?: StringFilter<"Theory"> | string
    pdf_files?: StringNullableFilter<"Theory"> | string | null
    created_at?: DateTimeFilter<"Theory"> | Date | string
    category_id?: IntFilter<"Theory"> | number
    parent_id?: IntNullableFilter<"Theory"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    parent?: XOR<TheoryNullableScalarRelationFilter, TheoryWhereInput> | null
    subTheories?: TheoryListRelationFilter
  }, "theory_id">

  export type TheoryOrderByWithAggregationInput = {
    theory_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdf_files?: SortOrderInput | SortOrder
    created_at?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: TheoryCountOrderByAggregateInput
    _avg?: TheoryAvgOrderByAggregateInput
    _max?: TheoryMaxOrderByAggregateInput
    _min?: TheoryMinOrderByAggregateInput
    _sum?: TheorySumOrderByAggregateInput
  }

  export type TheoryScalarWhereWithAggregatesInput = {
    AND?: TheoryScalarWhereWithAggregatesInput | TheoryScalarWhereWithAggregatesInput[]
    OR?: TheoryScalarWhereWithAggregatesInput[]
    NOT?: TheoryScalarWhereWithAggregatesInput | TheoryScalarWhereWithAggregatesInput[]
    theory_id?: IntWithAggregatesFilter<"Theory"> | number
    title?: StringWithAggregatesFilter<"Theory"> | string
    content?: StringWithAggregatesFilter<"Theory"> | string
    pdf_files?: StringNullableWithAggregatesFilter<"Theory"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Theory"> | Date | string
    category_id?: IntWithAggregatesFilter<"Theory"> | number
    parent_id?: IntNullableWithAggregatesFilter<"Theory"> | number | null
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    quiz_id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Quiz"> | $Enums.Difficulty | null
    time_limit?: IntNullableFilter<"Quiz"> | number | null
    is_exam_mode?: BoolFilter<"Quiz"> | boolean
    created_at?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    subject_id?: IntFilter<"Quiz"> | number
    category_id?: IntFilter<"Quiz"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    questions?: QuestionListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    quiz_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    time_limit?: SortOrderInput | SortOrder
    is_exam_mode?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    quiz_id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Quiz"> | $Enums.Difficulty | null
    time_limit?: IntNullableFilter<"Quiz"> | number | null
    is_exam_mode?: BoolFilter<"Quiz"> | boolean
    created_at?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    subject_id?: IntFilter<"Quiz"> | number
    category_id?: IntFilter<"Quiz"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    questions?: QuestionListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
  }, "quiz_id">

  export type QuizOrderByWithAggregationInput = {
    quiz_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    time_limit?: SortOrderInput | SortOrder
    is_exam_mode?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    quiz_id?: IntWithAggregatesFilter<"Quiz"> | number
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    difficulty?: EnumDifficultyNullableWithAggregatesFilter<"Quiz"> | $Enums.Difficulty | null
    time_limit?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    is_exam_mode?: BoolWithAggregatesFilter<"Quiz"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"Quiz"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Quiz"> | Date | string | null
    subject_id?: IntWithAggregatesFilter<"Quiz"> | number
    category_id?: IntWithAggregatesFilter<"Quiz"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    question_id?: IntFilter<"Question"> | number
    content?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    quiz_id?: IntFilter<"Question"> | number
    image_url?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: OptionListRelationFilter
    answers?: AnswerListRelationFilter
    pairs?: MatchingPairListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    question_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    quiz_id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    quiz?: QuizOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    pairs?: MatchingPairOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    question_id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    content?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    quiz_id?: IntFilter<"Question"> | number
    image_url?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: OptionListRelationFilter
    answers?: AnswerListRelationFilter
    pairs?: MatchingPairListRelationFilter
  }, "question_id">

  export type QuestionOrderByWithAggregationInput = {
    question_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    quiz_id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    question_id?: IntWithAggregatesFilter<"Question"> | number
    content?: StringWithAggregatesFilter<"Question"> | string
    type?: StringWithAggregatesFilter<"Question"> | string
    quiz_id?: IntWithAggregatesFilter<"Question"> | number
    image_url?: StringNullableWithAggregatesFilter<"Question"> | string | null
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    option_id?: IntFilter<"Option"> | number
    text?: StringFilter<"Option"> | string
    is_correct?: BoolFilter<"Option"> | boolean
    question_id?: IntFilter<"Option"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    option_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
    question?: QuestionOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    option_id?: number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    text?: StringFilter<"Option"> | string
    is_correct?: BoolFilter<"Option"> | boolean
    question_id?: IntFilter<"Option"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answers?: AnswerListRelationFilter
  }, "option_id">

  export type OptionOrderByWithAggregationInput = {
    option_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    option_id?: IntWithAggregatesFilter<"Option"> | number
    text?: StringWithAggregatesFilter<"Option"> | string
    is_correct?: BoolWithAggregatesFilter<"Option"> | boolean
    question_id?: IntWithAggregatesFilter<"Option"> | number
  }

  export type MatchingPairWhereInput = {
    AND?: MatchingPairWhereInput | MatchingPairWhereInput[]
    OR?: MatchingPairWhereInput[]
    NOT?: MatchingPairWhereInput | MatchingPairWhereInput[]
    pair_id?: IntFilter<"MatchingPair"> | number
    left?: StringFilter<"MatchingPair"> | string
    right?: StringFilter<"MatchingPair"> | string
    question_id?: IntFilter<"MatchingPair"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type MatchingPairOrderByWithRelationInput = {
    pair_id?: SortOrder
    left?: SortOrder
    right?: SortOrder
    question_id?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type MatchingPairWhereUniqueInput = Prisma.AtLeast<{
    pair_id?: number
    AND?: MatchingPairWhereInput | MatchingPairWhereInput[]
    OR?: MatchingPairWhereInput[]
    NOT?: MatchingPairWhereInput | MatchingPairWhereInput[]
    left?: StringFilter<"MatchingPair"> | string
    right?: StringFilter<"MatchingPair"> | string
    question_id?: IntFilter<"MatchingPair"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "pair_id">

  export type MatchingPairOrderByWithAggregationInput = {
    pair_id?: SortOrder
    left?: SortOrder
    right?: SortOrder
    question_id?: SortOrder
    _count?: MatchingPairCountOrderByAggregateInput
    _avg?: MatchingPairAvgOrderByAggregateInput
    _max?: MatchingPairMaxOrderByAggregateInput
    _min?: MatchingPairMinOrderByAggregateInput
    _sum?: MatchingPairSumOrderByAggregateInput
  }

  export type MatchingPairScalarWhereWithAggregatesInput = {
    AND?: MatchingPairScalarWhereWithAggregatesInput | MatchingPairScalarWhereWithAggregatesInput[]
    OR?: MatchingPairScalarWhereWithAggregatesInput[]
    NOT?: MatchingPairScalarWhereWithAggregatesInput | MatchingPairScalarWhereWithAggregatesInput[]
    pair_id?: IntWithAggregatesFilter<"MatchingPair"> | number
    left?: StringWithAggregatesFilter<"MatchingPair"> | string
    right?: StringWithAggregatesFilter<"MatchingPair"> | string
    question_id?: IntWithAggregatesFilter<"MatchingPair"> | number
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    qa_id?: IntFilter<"QuizAttempt"> | number
    started_at?: DateTimeFilter<"QuizAttempt"> | Date | string
    completed_at?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    score?: IntNullableFilter<"QuizAttempt"> | number | null
    total_questions?: IntNullableFilter<"QuizAttempt"> | number | null
    time_spent?: IntNullableFilter<"QuizAttempt"> | number | null
    status?: EnumQuizStatusFilter<"QuizAttempt"> | $Enums.QuizStatus
    user_id?: IntFilter<"QuizAttempt"> | number
    quiz_id?: IntFilter<"QuizAttempt"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuizAttemptOrderByWithRelationInput = {
    qa_id?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    total_questions?: SortOrderInput | SortOrder
    time_spent?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    qa_id?: number
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    started_at?: DateTimeFilter<"QuizAttempt"> | Date | string
    completed_at?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    score?: IntNullableFilter<"QuizAttempt"> | number | null
    total_questions?: IntNullableFilter<"QuizAttempt"> | number | null
    time_spent?: IntNullableFilter<"QuizAttempt"> | number | null
    status?: EnumQuizStatusFilter<"QuizAttempt"> | $Enums.QuizStatus
    user_id?: IntFilter<"QuizAttempt"> | number
    quiz_id?: IntFilter<"QuizAttempt"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: AnswerListRelationFilter
  }, "qa_id">

  export type QuizAttemptOrderByWithAggregationInput = {
    qa_id?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    total_questions?: SortOrderInput | SortOrder
    time_spent?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    qa_id?: IntWithAggregatesFilter<"QuizAttempt"> | number
    started_at?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"QuizAttempt"> | Date | string | null
    score?: IntNullableWithAggregatesFilter<"QuizAttempt"> | number | null
    total_questions?: IntNullableWithAggregatesFilter<"QuizAttempt"> | number | null
    time_spent?: IntNullableWithAggregatesFilter<"QuizAttempt"> | number | null
    status?: EnumQuizStatusWithAggregatesFilter<"QuizAttempt"> | $Enums.QuizStatus
    user_id?: IntWithAggregatesFilter<"QuizAttempt"> | number
    quiz_id?: IntWithAggregatesFilter<"QuizAttempt"> | number
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    answer_id?: IntFilter<"Answer"> | number
    response_text?: StringNullableFilter<"Answer"> | string | null
    option_id?: IntNullableFilter<"Answer"> | number | null
    question_id?: IntFilter<"Answer"> | number
    qa_id?: IntFilter<"Answer"> | number
    option?: XOR<OptionNullableScalarRelationFilter, OptionWhereInput> | null
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    quizAttempt?: XOR<QuizAttemptScalarRelationFilter, QuizAttemptWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    answer_id?: SortOrder
    response_text?: SortOrderInput | SortOrder
    option_id?: SortOrderInput | SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
    option?: OptionOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    quizAttempt?: QuizAttemptOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    answer_id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    response_text?: StringNullableFilter<"Answer"> | string | null
    option_id?: IntNullableFilter<"Answer"> | number | null
    question_id?: IntFilter<"Answer"> | number
    qa_id?: IntFilter<"Answer"> | number
    option?: XOR<OptionNullableScalarRelationFilter, OptionWhereInput> | null
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    quizAttempt?: XOR<QuizAttemptScalarRelationFilter, QuizAttemptWhereInput>
  }, "answer_id">

  export type AnswerOrderByWithAggregationInput = {
    answer_id?: SortOrder
    response_text?: SortOrderInput | SortOrder
    option_id?: SortOrderInput | SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    answer_id?: IntWithAggregatesFilter<"Answer"> | number
    response_text?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    option_id?: IntNullableWithAggregatesFilter<"Answer"> | number | null
    question_id?: IntWithAggregatesFilter<"Answer"> | number
    qa_id?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type FlashcardWhereInput = {
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    flashcard_id?: IntFilter<"Flashcard"> | number
    front?: StringFilter<"Flashcard"> | string
    back?: StringFilter<"Flashcard"> | string
    difficulty?: EnumFlashcardDifficultyFilter<"Flashcard"> | $Enums.FlashcardDifficulty
    created_at?: DateTimeFilter<"Flashcard"> | Date | string
    updated_at?: DateTimeFilter<"Flashcard"> | Date | string
    category_id?: IntFilter<"Flashcard"> | number
    user_id?: IntFilter<"Flashcard"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlashcardOrderByWithRelationInput = {
    flashcard_id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FlashcardWhereUniqueInput = Prisma.AtLeast<{
    flashcard_id?: number
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    front?: StringFilter<"Flashcard"> | string
    back?: StringFilter<"Flashcard"> | string
    difficulty?: EnumFlashcardDifficultyFilter<"Flashcard"> | $Enums.FlashcardDifficulty
    created_at?: DateTimeFilter<"Flashcard"> | Date | string
    updated_at?: DateTimeFilter<"Flashcard"> | Date | string
    category_id?: IntFilter<"Flashcard"> | number
    user_id?: IntFilter<"Flashcard"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "flashcard_id">

  export type FlashcardOrderByWithAggregationInput = {
    flashcard_id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    _count?: FlashcardCountOrderByAggregateInput
    _avg?: FlashcardAvgOrderByAggregateInput
    _max?: FlashcardMaxOrderByAggregateInput
    _min?: FlashcardMinOrderByAggregateInput
    _sum?: FlashcardSumOrderByAggregateInput
  }

  export type FlashcardScalarWhereWithAggregatesInput = {
    AND?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    OR?: FlashcardScalarWhereWithAggregatesInput[]
    NOT?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    flashcard_id?: IntWithAggregatesFilter<"Flashcard"> | number
    front?: StringWithAggregatesFilter<"Flashcard"> | string
    back?: StringWithAggregatesFilter<"Flashcard"> | string
    difficulty?: EnumFlashcardDifficultyWithAggregatesFilter<"Flashcard"> | $Enums.FlashcardDifficulty
    created_at?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
    category_id?: IntWithAggregatesFilter<"Flashcard"> | number
    user_id?: IntWithAggregatesFilter<"Flashcard"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    flashcards?: FlashcardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    flashcards?: FlashcardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    flashcards?: FlashcardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SubjectCreateInput = {
    name: string
    quizzes?: QuizCreateNestedManyWithoutSubjectInput
    categories?: CategoryCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    subject_id?: number
    name: string
    quizzes?: QuizUncheckedCreateNestedManyWithoutSubjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUpdateManyWithoutSubjectNestedInput
    categories?: CategoryUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUncheckedUpdateManyWithoutSubjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    subject_id?: number
    name: string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    subject: SubjectCreateNestedOneWithoutCategoriesInput
    theories?: TheoryCreateNestedManyWithoutCategoryInput
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    category_id?: number
    name: string
    subject_id: number
    theories?: TheoryUncheckedCreateNestedManyWithoutCategoryInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCategoriesNestedInput
    theories?: TheoryUpdateManyWithoutCategoryNestedInput
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_id?: IntFieldUpdateOperationsInput | number
    theories?: TheoryUncheckedUpdateManyWithoutCategoryNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    category_id?: number
    name: string
    subject_id: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type TheoryCreateInput = {
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category: CategoryCreateNestedOneWithoutTheoriesInput
    parent?: TheoryCreateNestedOneWithoutSubTheoriesInput
    subTheories?: TheoryCreateNestedManyWithoutParentInput
  }

  export type TheoryUncheckedCreateInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category_id: number
    parent_id?: number | null
    subTheories?: TheoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type TheoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTheoriesNestedInput
    parent?: TheoryUpdateOneWithoutSubTheoriesNestedInput
    subTheories?: TheoryUpdateManyWithoutParentNestedInput
  }

  export type TheoryUncheckedUpdateInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    subTheories?: TheoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TheoryCreateManyInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category_id: number
    parent_id?: number | null
  }

  export type TheoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheoryUncheckedUpdateManyInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuizCreateInput = {
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject: SubjectCreateNestedOneWithoutQuizzesInput
    category: CategoryCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject_id: number
    category_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject?: SubjectUpdateOneRequiredWithoutQuizzesNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject_id: number
    category_id: number
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizUncheckedUpdateManyInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    question_id?: number
    content: string
    type: string
    quiz_id: number
    image_url?: string | null
    explanation?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    question_id?: number
    content: string
    type: string
    quiz_id: number
    image_url?: string | null
    explanation?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionCreateInput = {
    text: string
    is_correct: boolean
    question: QuestionCreateNestedOneWithoutOptionsInput
    answers?: AnswerCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateInput = {
    option_id?: number
    text: string
    is_correct: boolean
    question_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    answers?: AnswerUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    option_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionCreateManyInput = {
    option_id?: number
    text: string
    is_correct: boolean
    question_id: number
  }

  export type OptionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyInput = {
    option_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type MatchingPairCreateInput = {
    left: string
    right: string
    question: QuestionCreateNestedOneWithoutPairsInput
  }

  export type MatchingPairUncheckedCreateInput = {
    pair_id?: number
    left: string
    right: string
    question_id: number
  }

  export type MatchingPairUpdateInput = {
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutPairsNestedInput
  }

  export type MatchingPairUncheckedUpdateInput = {
    pair_id?: IntFieldUpdateOperationsInput | number
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type MatchingPairCreateManyInput = {
    pair_id?: number
    left: string
    right: string
    question_id: number
  }

  export type MatchingPairUpdateManyMutationInput = {
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
  }

  export type MatchingPairUncheckedUpdateManyInput = {
    pair_id?: IntFieldUpdateOperationsInput | number
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuizAttemptCreateInput = {
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    quiz: QuizCreateNestedOneWithoutQuizAttemptsInput
    answers?: AnswerCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user_id: number
    quiz_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUpdateInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutQuizAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user_id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptCreateManyInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user_id: number
    quiz_id: number
  }

  export type QuizAttemptUpdateManyMutationInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user_id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateInput = {
    response_text?: string | null
    option?: OptionCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    quizAttempt: QuizAttemptCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    answer_id?: number
    response_text?: string | null
    option_id?: number | null
    question_id: number
    qa_id: number
  }

  export type AnswerUpdateInput = {
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option?: OptionUpdateOneWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    quizAttempt?: QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: IntFieldUpdateOperationsInput | number
    qa_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyInput = {
    answer_id?: number
    response_text?: string | null
    option_id?: number | null
    question_id: number
    qa_id: number
  }

  export type AnswerUpdateManyMutationInput = {
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: IntFieldUpdateOperationsInput | number
    qa_id?: IntFieldUpdateOperationsInput | number
  }

  export type FlashcardCreateInput = {
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutFlashcardsInput
    user: UserCreateNestedOneWithoutFlashcardsInput
  }

  export type FlashcardUncheckedCreateInput = {
    flashcard_id?: number
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    category_id: number
    user_id: number
  }

  export type FlashcardUpdateInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutFlashcardsNestedInput
    user?: UserUpdateOneRequiredWithoutFlashcardsNestedInput
  }

  export type FlashcardUncheckedUpdateInput = {
    flashcard_id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FlashcardCreateManyInput = {
    flashcard_id?: number
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    category_id: number
    user_id: number
  }

  export type FlashcardUpdateManyMutationInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateManyInput = {
    flashcard_id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }

  export type FlashcardListRelationFilter = {
    every?: FlashcardWhereInput
    some?: FlashcardWhereInput
    none?: FlashcardWhereInput
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashcardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    subject_id?: SortOrder
    name?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    subject_id?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    subject_id?: SortOrder
    name?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    subject_id?: SortOrder
    name?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    subject_id?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TheoryListRelationFilter = {
    every?: TheoryWhereInput
    some?: TheoryWhereInput
    none?: TheoryWhereInput
  }

  export type TheoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    subject_id?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
    subject_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    subject_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    subject_id?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    category_id?: SortOrder
    subject_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TheoryNullableScalarRelationFilter = {
    is?: TheoryWhereInput | null
    isNot?: TheoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TheoryCountOrderByAggregateInput = {
    theory_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdf_files?: SortOrder
    created_at?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type TheoryAvgOrderByAggregateInput = {
    theory_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type TheoryMaxOrderByAggregateInput = {
    theory_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdf_files?: SortOrder
    created_at?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type TheoryMinOrderByAggregateInput = {
    theory_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdf_files?: SortOrder
    created_at?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type TheorySumOrderByAggregateInput = {
    theory_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableFilter<$PrismaModel> | $Enums.Difficulty | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    quiz_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    time_limit?: SortOrder
    is_exam_mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    quiz_id?: SortOrder
    time_limit?: SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    quiz_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    time_limit?: SortOrder
    is_exam_mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    quiz_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    time_limit?: SortOrder
    is_exam_mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    quiz_id?: SortOrder
    time_limit?: SortOrder
    subject_id?: SortOrder
    category_id?: SortOrder
  }

  export type EnumDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type MatchingPairListRelationFilter = {
    every?: MatchingPairWhereInput
    some?: MatchingPairWhereInput
    none?: MatchingPairWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchingPairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    question_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    quiz_id?: SortOrder
    image_url?: SortOrder
    explanation?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    question_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    question_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    quiz_id?: SortOrder
    image_url?: SortOrder
    explanation?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    question_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    quiz_id?: SortOrder
    image_url?: SortOrder
    explanation?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    question_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type OptionCountOrderByAggregateInput = {
    option_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    option_id?: SortOrder
    question_id?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    option_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    option_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    option_id?: SortOrder
    question_id?: SortOrder
  }

  export type MatchingPairCountOrderByAggregateInput = {
    pair_id?: SortOrder
    left?: SortOrder
    right?: SortOrder
    question_id?: SortOrder
  }

  export type MatchingPairAvgOrderByAggregateInput = {
    pair_id?: SortOrder
    question_id?: SortOrder
  }

  export type MatchingPairMaxOrderByAggregateInput = {
    pair_id?: SortOrder
    left?: SortOrder
    right?: SortOrder
    question_id?: SortOrder
  }

  export type MatchingPairMinOrderByAggregateInput = {
    pair_id?: SortOrder
    left?: SortOrder
    right?: SortOrder
    question_id?: SortOrder
  }

  export type MatchingPairSumOrderByAggregateInput = {
    pair_id?: SortOrder
    question_id?: SortOrder
  }

  export type EnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[]
    notIn?: $Enums.QuizStatus[]
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    qa_id?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
    score?: SortOrder
    total_questions?: SortOrder
    time_spent?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    qa_id?: SortOrder
    score?: SortOrder
    total_questions?: SortOrder
    time_spent?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    qa_id?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
    score?: SortOrder
    total_questions?: SortOrder
    time_spent?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    qa_id?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
    score?: SortOrder
    total_questions?: SortOrder
    time_spent?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    qa_id?: SortOrder
    score?: SortOrder
    total_questions?: SortOrder
    time_spent?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
  }

  export type EnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[]
    notIn?: $Enums.QuizStatus[]
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type OptionNullableScalarRelationFilter = {
    is?: OptionWhereInput | null
    isNot?: OptionWhereInput | null
  }

  export type QuizAttemptScalarRelationFilter = {
    is?: QuizAttemptWhereInput
    isNot?: QuizAttemptWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    answer_id?: SortOrder
    response_text?: SortOrder
    option_id?: SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    answer_id?: SortOrder
    option_id?: SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    answer_id?: SortOrder
    response_text?: SortOrder
    option_id?: SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    answer_id?: SortOrder
    response_text?: SortOrder
    option_id?: SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    answer_id?: SortOrder
    option_id?: SortOrder
    question_id?: SortOrder
    qa_id?: SortOrder
  }

  export type EnumFlashcardDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashcardDifficulty | EnumFlashcardDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.FlashcardDifficulty[]
    notIn?: $Enums.FlashcardDifficulty[]
    not?: NestedEnumFlashcardDifficultyFilter<$PrismaModel> | $Enums.FlashcardDifficulty
  }

  export type FlashcardCountOrderByAggregateInput = {
    flashcard_id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type FlashcardAvgOrderByAggregateInput = {
    flashcard_id?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type FlashcardMaxOrderByAggregateInput = {
    flashcard_id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type FlashcardMinOrderByAggregateInput = {
    flashcard_id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type FlashcardSumOrderByAggregateInput = {
    flashcard_id?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumFlashcardDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashcardDifficulty | EnumFlashcardDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.FlashcardDifficulty[]
    notIn?: $Enums.FlashcardDifficulty[]
    not?: NestedEnumFlashcardDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.FlashcardDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlashcardDifficultyFilter<$PrismaModel>
    _max?: NestedEnumFlashcardDifficultyFilter<$PrismaModel>
  }

  export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type FlashcardCreateNestedManyWithoutUserInput = {
    create?: XOR<FlashcardCreateWithoutUserInput, FlashcardUncheckedCreateWithoutUserInput> | FlashcardCreateWithoutUserInput[] | FlashcardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutUserInput | FlashcardCreateOrConnectWithoutUserInput[]
    createMany?: FlashcardCreateManyUserInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type FlashcardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlashcardCreateWithoutUserInput, FlashcardUncheckedCreateWithoutUserInput> | FlashcardCreateWithoutUserInput[] | FlashcardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutUserInput | FlashcardCreateOrConnectWithoutUserInput[]
    createMany?: FlashcardCreateManyUserInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type FlashcardUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlashcardCreateWithoutUserInput, FlashcardUncheckedCreateWithoutUserInput> | FlashcardCreateWithoutUserInput[] | FlashcardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutUserInput | FlashcardCreateOrConnectWithoutUserInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutUserInput | FlashcardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlashcardCreateManyUserInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutUserInput | FlashcardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutUserInput | FlashcardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type FlashcardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlashcardCreateWithoutUserInput, FlashcardUncheckedCreateWithoutUserInput> | FlashcardCreateWithoutUserInput[] | FlashcardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutUserInput | FlashcardCreateOrConnectWithoutUserInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutUserInput | FlashcardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlashcardCreateManyUserInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutUserInput | FlashcardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutUserInput | FlashcardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type QuizCreateNestedManyWithoutSubjectInput = {
    create?: XOR<QuizCreateWithoutSubjectInput, QuizUncheckedCreateWithoutSubjectInput> | QuizCreateWithoutSubjectInput[] | QuizUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubjectInput | QuizCreateOrConnectWithoutSubjectInput[]
    createMany?: QuizCreateManySubjectInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutSubjectInput = {
    create?: XOR<CategoryCreateWithoutSubjectInput, CategoryUncheckedCreateWithoutSubjectInput> | CategoryCreateWithoutSubjectInput[] | CategoryUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutSubjectInput | CategoryCreateOrConnectWithoutSubjectInput[]
    createMany?: CategoryCreateManySubjectInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<QuizCreateWithoutSubjectInput, QuizUncheckedCreateWithoutSubjectInput> | QuizCreateWithoutSubjectInput[] | QuizUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubjectInput | QuizCreateOrConnectWithoutSubjectInput[]
    createMany?: QuizCreateManySubjectInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<CategoryCreateWithoutSubjectInput, CategoryUncheckedCreateWithoutSubjectInput> | CategoryCreateWithoutSubjectInput[] | CategoryUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutSubjectInput | CategoryCreateOrConnectWithoutSubjectInput[]
    createMany?: CategoryCreateManySubjectInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type QuizUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<QuizCreateWithoutSubjectInput, QuizUncheckedCreateWithoutSubjectInput> | QuizCreateWithoutSubjectInput[] | QuizUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubjectInput | QuizCreateOrConnectWithoutSubjectInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutSubjectInput | QuizUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: QuizCreateManySubjectInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutSubjectInput | QuizUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutSubjectInput | QuizUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<CategoryCreateWithoutSubjectInput, CategoryUncheckedCreateWithoutSubjectInput> | CategoryCreateWithoutSubjectInput[] | CategoryUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutSubjectInput | CategoryCreateOrConnectWithoutSubjectInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutSubjectInput | CategoryUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: CategoryCreateManySubjectInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutSubjectInput | CategoryUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutSubjectInput | CategoryUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<QuizCreateWithoutSubjectInput, QuizUncheckedCreateWithoutSubjectInput> | QuizCreateWithoutSubjectInput[] | QuizUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubjectInput | QuizCreateOrConnectWithoutSubjectInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutSubjectInput | QuizUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: QuizCreateManySubjectInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutSubjectInput | QuizUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutSubjectInput | QuizUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<CategoryCreateWithoutSubjectInput, CategoryUncheckedCreateWithoutSubjectInput> | CategoryCreateWithoutSubjectInput[] | CategoryUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutSubjectInput | CategoryCreateOrConnectWithoutSubjectInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutSubjectInput | CategoryUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: CategoryCreateManySubjectInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutSubjectInput | CategoryUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutSubjectInput | CategoryUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<SubjectCreateWithoutCategoriesInput, SubjectUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutCategoriesInput
    connect?: SubjectWhereUniqueInput
  }

  export type TheoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TheoryCreateWithoutCategoryInput, TheoryUncheckedCreateWithoutCategoryInput> | TheoryCreateWithoutCategoryInput[] | TheoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutCategoryInput | TheoryCreateOrConnectWithoutCategoryInput[]
    createMany?: TheoryCreateManyCategoryInputEnvelope
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type FlashcardCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FlashcardCreateWithoutCategoryInput, FlashcardUncheckedCreateWithoutCategoryInput> | FlashcardCreateWithoutCategoryInput[] | FlashcardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutCategoryInput | FlashcardCreateOrConnectWithoutCategoryInput[]
    createMany?: FlashcardCreateManyCategoryInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type TheoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TheoryCreateWithoutCategoryInput, TheoryUncheckedCreateWithoutCategoryInput> | TheoryCreateWithoutCategoryInput[] | TheoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutCategoryInput | TheoryCreateOrConnectWithoutCategoryInput[]
    createMany?: TheoryCreateManyCategoryInputEnvelope
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type FlashcardUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FlashcardCreateWithoutCategoryInput, FlashcardUncheckedCreateWithoutCategoryInput> | FlashcardCreateWithoutCategoryInput[] | FlashcardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutCategoryInput | FlashcardCreateOrConnectWithoutCategoryInput[]
    createMany?: FlashcardCreateManyCategoryInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type SubjectUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<SubjectCreateWithoutCategoriesInput, SubjectUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutCategoriesInput
    upsert?: SubjectUpsertWithoutCategoriesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutCategoriesInput, SubjectUpdateWithoutCategoriesInput>, SubjectUncheckedUpdateWithoutCategoriesInput>
  }

  export type TheoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TheoryCreateWithoutCategoryInput, TheoryUncheckedCreateWithoutCategoryInput> | TheoryCreateWithoutCategoryInput[] | TheoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutCategoryInput | TheoryCreateOrConnectWithoutCategoryInput[]
    upsert?: TheoryUpsertWithWhereUniqueWithoutCategoryInput | TheoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TheoryCreateManyCategoryInputEnvelope
    set?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    disconnect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    delete?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    update?: TheoryUpdateWithWhereUniqueWithoutCategoryInput | TheoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TheoryUpdateManyWithWhereWithoutCategoryInput | TheoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TheoryScalarWhereInput | TheoryScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type FlashcardUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FlashcardCreateWithoutCategoryInput, FlashcardUncheckedCreateWithoutCategoryInput> | FlashcardCreateWithoutCategoryInput[] | FlashcardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutCategoryInput | FlashcardCreateOrConnectWithoutCategoryInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutCategoryInput | FlashcardUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FlashcardCreateManyCategoryInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutCategoryInput | FlashcardUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutCategoryInput | FlashcardUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type TheoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TheoryCreateWithoutCategoryInput, TheoryUncheckedCreateWithoutCategoryInput> | TheoryCreateWithoutCategoryInput[] | TheoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutCategoryInput | TheoryCreateOrConnectWithoutCategoryInput[]
    upsert?: TheoryUpsertWithWhereUniqueWithoutCategoryInput | TheoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TheoryCreateManyCategoryInputEnvelope
    set?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    disconnect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    delete?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    update?: TheoryUpdateWithWhereUniqueWithoutCategoryInput | TheoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TheoryUpdateManyWithWhereWithoutCategoryInput | TheoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TheoryScalarWhereInput | TheoryScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type FlashcardUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FlashcardCreateWithoutCategoryInput, FlashcardUncheckedCreateWithoutCategoryInput> | FlashcardCreateWithoutCategoryInput[] | FlashcardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutCategoryInput | FlashcardCreateOrConnectWithoutCategoryInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutCategoryInput | FlashcardUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FlashcardCreateManyCategoryInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutCategoryInput | FlashcardUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutCategoryInput | FlashcardUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutTheoriesInput = {
    create?: XOR<CategoryCreateWithoutTheoriesInput, CategoryUncheckedCreateWithoutTheoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTheoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type TheoryCreateNestedOneWithoutSubTheoriesInput = {
    create?: XOR<TheoryCreateWithoutSubTheoriesInput, TheoryUncheckedCreateWithoutSubTheoriesInput>
    connectOrCreate?: TheoryCreateOrConnectWithoutSubTheoriesInput
    connect?: TheoryWhereUniqueInput
  }

  export type TheoryCreateNestedManyWithoutParentInput = {
    create?: XOR<TheoryCreateWithoutParentInput, TheoryUncheckedCreateWithoutParentInput> | TheoryCreateWithoutParentInput[] | TheoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutParentInput | TheoryCreateOrConnectWithoutParentInput[]
    createMany?: TheoryCreateManyParentInputEnvelope
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
  }

  export type TheoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TheoryCreateWithoutParentInput, TheoryUncheckedCreateWithoutParentInput> | TheoryCreateWithoutParentInput[] | TheoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutParentInput | TheoryCreateOrConnectWithoutParentInput[]
    createMany?: TheoryCreateManyParentInputEnvelope
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateOneRequiredWithoutTheoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutTheoriesInput, CategoryUncheckedCreateWithoutTheoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTheoriesInput
    upsert?: CategoryUpsertWithoutTheoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTheoriesInput, CategoryUpdateWithoutTheoriesInput>, CategoryUncheckedUpdateWithoutTheoriesInput>
  }

  export type TheoryUpdateOneWithoutSubTheoriesNestedInput = {
    create?: XOR<TheoryCreateWithoutSubTheoriesInput, TheoryUncheckedCreateWithoutSubTheoriesInput>
    connectOrCreate?: TheoryCreateOrConnectWithoutSubTheoriesInput
    upsert?: TheoryUpsertWithoutSubTheoriesInput
    disconnect?: TheoryWhereInput | boolean
    delete?: TheoryWhereInput | boolean
    connect?: TheoryWhereUniqueInput
    update?: XOR<XOR<TheoryUpdateToOneWithWhereWithoutSubTheoriesInput, TheoryUpdateWithoutSubTheoriesInput>, TheoryUncheckedUpdateWithoutSubTheoriesInput>
  }

  export type TheoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<TheoryCreateWithoutParentInput, TheoryUncheckedCreateWithoutParentInput> | TheoryCreateWithoutParentInput[] | TheoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutParentInput | TheoryCreateOrConnectWithoutParentInput[]
    upsert?: TheoryUpsertWithWhereUniqueWithoutParentInput | TheoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TheoryCreateManyParentInputEnvelope
    set?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    disconnect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    delete?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    update?: TheoryUpdateWithWhereUniqueWithoutParentInput | TheoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TheoryUpdateManyWithWhereWithoutParentInput | TheoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TheoryScalarWhereInput | TheoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TheoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TheoryCreateWithoutParentInput, TheoryUncheckedCreateWithoutParentInput> | TheoryCreateWithoutParentInput[] | TheoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TheoryCreateOrConnectWithoutParentInput | TheoryCreateOrConnectWithoutParentInput[]
    upsert?: TheoryUpsertWithWhereUniqueWithoutParentInput | TheoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TheoryCreateManyParentInputEnvelope
    set?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    disconnect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    delete?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    connect?: TheoryWhereUniqueInput | TheoryWhereUniqueInput[]
    update?: TheoryUpdateWithWhereUniqueWithoutParentInput | TheoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TheoryUpdateManyWithWhereWithoutParentInput | TheoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TheoryScalarWhereInput | TheoryScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<SubjectCreateWithoutQuizzesInput, SubjectUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutQuizzesInput
    connect?: SubjectWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuizzesInput
    connect?: CategoryWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type NullableEnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubjectUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<SubjectCreateWithoutQuizzesInput, SubjectUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutQuizzesInput
    upsert?: SubjectUpsertWithoutQuizzesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutQuizzesInput, SubjectUpdateWithoutQuizzesInput>, SubjectUncheckedUpdateWithoutQuizzesInput>
  }

  export type CategoryUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuizzesInput
    upsert?: CategoryUpsertWithoutQuizzesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutQuizzesInput, CategoryUpdateWithoutQuizzesInput>, CategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizAttemptUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type MatchingPairCreateNestedManyWithoutQuestionInput = {
    create?: XOR<MatchingPairCreateWithoutQuestionInput, MatchingPairUncheckedCreateWithoutQuestionInput> | MatchingPairCreateWithoutQuestionInput[] | MatchingPairUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MatchingPairCreateOrConnectWithoutQuestionInput | MatchingPairCreateOrConnectWithoutQuestionInput[]
    createMany?: MatchingPairCreateManyQuestionInputEnvelope
    connect?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type MatchingPairUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<MatchingPairCreateWithoutQuestionInput, MatchingPairUncheckedCreateWithoutQuestionInput> | MatchingPairCreateWithoutQuestionInput[] | MatchingPairUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MatchingPairCreateOrConnectWithoutQuestionInput | MatchingPairCreateOrConnectWithoutQuestionInput[]
    createMany?: MatchingPairCreateManyQuestionInputEnvelope
    connect?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type OptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type MatchingPairUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<MatchingPairCreateWithoutQuestionInput, MatchingPairUncheckedCreateWithoutQuestionInput> | MatchingPairCreateWithoutQuestionInput[] | MatchingPairUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MatchingPairCreateOrConnectWithoutQuestionInput | MatchingPairCreateOrConnectWithoutQuestionInput[]
    upsert?: MatchingPairUpsertWithWhereUniqueWithoutQuestionInput | MatchingPairUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: MatchingPairCreateManyQuestionInputEnvelope
    set?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    disconnect?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    delete?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    connect?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    update?: MatchingPairUpdateWithWhereUniqueWithoutQuestionInput | MatchingPairUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: MatchingPairUpdateManyWithWhereWithoutQuestionInput | MatchingPairUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: MatchingPairScalarWhereInput | MatchingPairScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type MatchingPairUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<MatchingPairCreateWithoutQuestionInput, MatchingPairUncheckedCreateWithoutQuestionInput> | MatchingPairCreateWithoutQuestionInput[] | MatchingPairUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MatchingPairCreateOrConnectWithoutQuestionInput | MatchingPairCreateOrConnectWithoutQuestionInput[]
    upsert?: MatchingPairUpsertWithWhereUniqueWithoutQuestionInput | MatchingPairUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: MatchingPairCreateManyQuestionInputEnvelope
    set?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    disconnect?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    delete?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    connect?: MatchingPairWhereUniqueInput | MatchingPairWhereUniqueInput[]
    update?: MatchingPairUpdateWithWhereUniqueWithoutQuestionInput | MatchingPairUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: MatchingPairUpdateManyWithWhereWithoutQuestionInput | MatchingPairUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: MatchingPairScalarWhereInput | MatchingPairScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutOptionInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type AnswerUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutOptionInput | AnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutOptionInput | AnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutOptionInput | AnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutOptionInput | AnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutOptionInput | AnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutOptionInput | AnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutPairsInput = {
    create?: XOR<QuestionCreateWithoutPairsInput, QuestionUncheckedCreateWithoutPairsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutPairsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutPairsNestedInput = {
    create?: XOR<QuestionCreateWithoutPairsInput, QuestionUncheckedCreateWithoutPairsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutPairsInput
    upsert?: QuestionUpsertWithoutPairsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutPairsInput, QuestionUpdateWithoutPairsInput>, QuestionUncheckedUpdateWithoutPairsInput>
  }

  export type UserCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<QuizCreateWithoutQuizAttemptsInput, QuizUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuizAttemptsInput
    connect?: QuizWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuizAttemptInput = {
    create?: XOR<AnswerCreateWithoutQuizAttemptInput, AnswerUncheckedCreateWithoutQuizAttemptInput> | AnswerCreateWithoutQuizAttemptInput[] | AnswerUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizAttemptInput | AnswerCreateOrConnectWithoutQuizAttemptInput[]
    createMany?: AnswerCreateManyQuizAttemptInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuizAttemptInput = {
    create?: XOR<AnswerCreateWithoutQuizAttemptInput, AnswerUncheckedCreateWithoutQuizAttemptInput> | AnswerCreateWithoutQuizAttemptInput[] | AnswerUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizAttemptInput | AnswerCreateOrConnectWithoutQuizAttemptInput[]
    createMany?: AnswerCreateManyQuizAttemptInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type EnumQuizStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuizStatus
  }

  export type UserUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    upsert?: UserUpsertWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizAttemptsInput, UserUpdateWithoutQuizAttemptsInput>, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type QuizUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<QuizCreateWithoutQuizAttemptsInput, QuizUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuizAttemptsInput
    upsert?: QuizUpsertWithoutQuizAttemptsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuizAttemptsInput, QuizUpdateWithoutQuizAttemptsInput>, QuizUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type AnswerUpdateManyWithoutQuizAttemptNestedInput = {
    create?: XOR<AnswerCreateWithoutQuizAttemptInput, AnswerUncheckedCreateWithoutQuizAttemptInput> | AnswerCreateWithoutQuizAttemptInput[] | AnswerUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizAttemptInput | AnswerCreateOrConnectWithoutQuizAttemptInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuizAttemptInput | AnswerUpsertWithWhereUniqueWithoutQuizAttemptInput[]
    createMany?: AnswerCreateManyQuizAttemptInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuizAttemptInput | AnswerUpdateWithWhereUniqueWithoutQuizAttemptInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuizAttemptInput | AnswerUpdateManyWithWhereWithoutQuizAttemptInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput = {
    create?: XOR<AnswerCreateWithoutQuizAttemptInput, AnswerUncheckedCreateWithoutQuizAttemptInput> | AnswerCreateWithoutQuizAttemptInput[] | AnswerUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizAttemptInput | AnswerCreateOrConnectWithoutQuizAttemptInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuizAttemptInput | AnswerUpsertWithWhereUniqueWithoutQuizAttemptInput[]
    createMany?: AnswerCreateManyQuizAttemptInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuizAttemptInput | AnswerUpdateWithWhereUniqueWithoutQuizAttemptInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuizAttemptInput | AnswerUpdateManyWithWhereWithoutQuizAttemptInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type OptionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: OptionCreateOrConnectWithoutAnswersInput
    connect?: OptionWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuizAttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuizAttemptCreateWithoutAnswersInput, QuizAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutAnswersInput
    connect?: QuizAttemptWhereUniqueInput
  }

  export type OptionUpdateOneWithoutAnswersNestedInput = {
    create?: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: OptionCreateOrConnectWithoutAnswersInput
    upsert?: OptionUpsertWithoutAnswersInput
    disconnect?: OptionWhereInput | boolean
    delete?: OptionWhereInput | boolean
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutAnswersInput, OptionUpdateWithoutAnswersInput>, OptionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutAnswersInput, QuizAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutAnswersInput
    upsert?: QuizAttemptUpsertWithoutAnswersInput
    connect?: QuizAttemptWhereUniqueInput
    update?: XOR<XOR<QuizAttemptUpdateToOneWithWhereWithoutAnswersInput, QuizAttemptUpdateWithoutAnswersInput>, QuizAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type CategoryCreateNestedOneWithoutFlashcardsInput = {
    create?: XOR<CategoryCreateWithoutFlashcardsInput, CategoryUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFlashcardsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlashcardsInput = {
    create?: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlashcardsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFlashcardDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.FlashcardDifficulty
  }

  export type CategoryUpdateOneRequiredWithoutFlashcardsNestedInput = {
    create?: XOR<CategoryCreateWithoutFlashcardsInput, CategoryUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFlashcardsInput
    upsert?: CategoryUpsertWithoutFlashcardsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFlashcardsInput, CategoryUpdateWithoutFlashcardsInput>, CategoryUncheckedUpdateWithoutFlashcardsInput>
  }

  export type UserUpdateOneRequiredWithoutFlashcardsNestedInput = {
    create?: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlashcardsInput
    upsert?: UserUpsertWithoutFlashcardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlashcardsInput, UserUpdateWithoutFlashcardsInput>, UserUncheckedUpdateWithoutFlashcardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableFilter<$PrismaModel> | $Enums.Difficulty | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[]
    notIn?: $Enums.QuizStatus[]
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[]
    notIn?: $Enums.QuizStatus[]
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type NestedEnumFlashcardDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashcardDifficulty | EnumFlashcardDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.FlashcardDifficulty[]
    notIn?: $Enums.FlashcardDifficulty[]
    not?: NestedEnumFlashcardDifficultyFilter<$PrismaModel> | $Enums.FlashcardDifficulty
  }

  export type NestedEnumFlashcardDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashcardDifficulty | EnumFlashcardDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.FlashcardDifficulty[]
    notIn?: $Enums.FlashcardDifficulty[]
    not?: NestedEnumFlashcardDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.FlashcardDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlashcardDifficultyFilter<$PrismaModel>
    _max?: NestedEnumFlashcardDifficultyFilter<$PrismaModel>
  }

  export type QuizAttemptCreateWithoutUserInput = {
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    quiz: QuizCreateNestedOneWithoutQuizAttemptsInput
    answers?: AnswerCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUncheckedCreateWithoutUserInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    quiz_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptCreateManyUserInputEnvelope = {
    data: QuizAttemptCreateManyUserInput | QuizAttemptCreateManyUserInput[]
  }

  export type FlashcardCreateWithoutUserInput = {
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutFlashcardsInput
  }

  export type FlashcardUncheckedCreateWithoutUserInput = {
    flashcard_id?: number
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    category_id: number
  }

  export type FlashcardCreateOrConnectWithoutUserInput = {
    where: FlashcardWhereUniqueInput
    create: XOR<FlashcardCreateWithoutUserInput, FlashcardUncheckedCreateWithoutUserInput>
  }

  export type FlashcardCreateManyUserInputEnvelope = {
    data: FlashcardCreateManyUserInput | FlashcardCreateManyUserInput[]
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    qa_id?: IntFilter<"QuizAttempt"> | number
    started_at?: DateTimeFilter<"QuizAttempt"> | Date | string
    completed_at?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    score?: IntNullableFilter<"QuizAttempt"> | number | null
    total_questions?: IntNullableFilter<"QuizAttempt"> | number | null
    time_spent?: IntNullableFilter<"QuizAttempt"> | number | null
    status?: EnumQuizStatusFilter<"QuizAttempt"> | $Enums.QuizStatus
    user_id?: IntFilter<"QuizAttempt"> | number
    quiz_id?: IntFilter<"QuizAttempt"> | number
  }

  export type FlashcardUpsertWithWhereUniqueWithoutUserInput = {
    where: FlashcardWhereUniqueInput
    update: XOR<FlashcardUpdateWithoutUserInput, FlashcardUncheckedUpdateWithoutUserInput>
    create: XOR<FlashcardCreateWithoutUserInput, FlashcardUncheckedCreateWithoutUserInput>
  }

  export type FlashcardUpdateWithWhereUniqueWithoutUserInput = {
    where: FlashcardWhereUniqueInput
    data: XOR<FlashcardUpdateWithoutUserInput, FlashcardUncheckedUpdateWithoutUserInput>
  }

  export type FlashcardUpdateManyWithWhereWithoutUserInput = {
    where: FlashcardScalarWhereInput
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyWithoutUserInput>
  }

  export type FlashcardScalarWhereInput = {
    AND?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
    OR?: FlashcardScalarWhereInput[]
    NOT?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
    flashcard_id?: IntFilter<"Flashcard"> | number
    front?: StringFilter<"Flashcard"> | string
    back?: StringFilter<"Flashcard"> | string
    difficulty?: EnumFlashcardDifficultyFilter<"Flashcard"> | $Enums.FlashcardDifficulty
    created_at?: DateTimeFilter<"Flashcard"> | Date | string
    updated_at?: DateTimeFilter<"Flashcard"> | Date | string
    category_id?: IntFilter<"Flashcard"> | number
    user_id?: IntFilter<"Flashcard"> | number
  }

  export type QuizCreateWithoutSubjectInput = {
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutSubjectInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutSubjectInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSubjectInput, QuizUncheckedCreateWithoutSubjectInput>
  }

  export type QuizCreateManySubjectInputEnvelope = {
    data: QuizCreateManySubjectInput | QuizCreateManySubjectInput[]
  }

  export type CategoryCreateWithoutSubjectInput = {
    name: string
    theories?: TheoryCreateNestedManyWithoutCategoryInput
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubjectInput = {
    category_id?: number
    name: string
    theories?: TheoryUncheckedCreateNestedManyWithoutCategoryInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubjectInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubjectInput, CategoryUncheckedCreateWithoutSubjectInput>
  }

  export type CategoryCreateManySubjectInputEnvelope = {
    data: CategoryCreateManySubjectInput | CategoryCreateManySubjectInput[]
  }

  export type QuizUpsertWithWhereUniqueWithoutSubjectInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutSubjectInput, QuizUncheckedUpdateWithoutSubjectInput>
    create: XOR<QuizCreateWithoutSubjectInput, QuizUncheckedCreateWithoutSubjectInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutSubjectInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutSubjectInput, QuizUncheckedUpdateWithoutSubjectInput>
  }

  export type QuizUpdateManyWithWhereWithoutSubjectInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutSubjectInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    quiz_id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Quiz"> | $Enums.Difficulty | null
    time_limit?: IntNullableFilter<"Quiz"> | number | null
    is_exam_mode?: BoolFilter<"Quiz"> | boolean
    created_at?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Quiz"> | Date | string | null
    subject_id?: IntFilter<"Quiz"> | number
    category_id?: IntFilter<"Quiz"> | number
  }

  export type CategoryUpsertWithWhereUniqueWithoutSubjectInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutSubjectInput, CategoryUncheckedUpdateWithoutSubjectInput>
    create: XOR<CategoryCreateWithoutSubjectInput, CategoryUncheckedCreateWithoutSubjectInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutSubjectInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutSubjectInput, CategoryUncheckedUpdateWithoutSubjectInput>
  }

  export type CategoryUpdateManyWithWhereWithoutSubjectInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutSubjectInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    category_id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    subject_id?: IntFilter<"Category"> | number
  }

  export type SubjectCreateWithoutCategoriesInput = {
    name: string
    quizzes?: QuizCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutCategoriesInput = {
    subject_id?: number
    name: string
    quizzes?: QuizUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutCategoriesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutCategoriesInput, SubjectUncheckedCreateWithoutCategoriesInput>
  }

  export type TheoryCreateWithoutCategoryInput = {
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    parent?: TheoryCreateNestedOneWithoutSubTheoriesInput
    subTheories?: TheoryCreateNestedManyWithoutParentInput
  }

  export type TheoryUncheckedCreateWithoutCategoryInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    parent_id?: number | null
    subTheories?: TheoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type TheoryCreateOrConnectWithoutCategoryInput = {
    where: TheoryWhereUniqueInput
    create: XOR<TheoryCreateWithoutCategoryInput, TheoryUncheckedCreateWithoutCategoryInput>
  }

  export type TheoryCreateManyCategoryInputEnvelope = {
    data: TheoryCreateManyCategoryInput | TheoryCreateManyCategoryInput[]
  }

  export type QuizCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject: SubjectCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCategoryInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizCreateManyCategoryInputEnvelope = {
    data: QuizCreateManyCategoryInput | QuizCreateManyCategoryInput[]
  }

  export type FlashcardCreateWithoutCategoryInput = {
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutFlashcardsInput
  }

  export type FlashcardUncheckedCreateWithoutCategoryInput = {
    flashcard_id?: number
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type FlashcardCreateOrConnectWithoutCategoryInput = {
    where: FlashcardWhereUniqueInput
    create: XOR<FlashcardCreateWithoutCategoryInput, FlashcardUncheckedCreateWithoutCategoryInput>
  }

  export type FlashcardCreateManyCategoryInputEnvelope = {
    data: FlashcardCreateManyCategoryInput | FlashcardCreateManyCategoryInput[]
  }

  export type SubjectUpsertWithoutCategoriesInput = {
    update: XOR<SubjectUpdateWithoutCategoriesInput, SubjectUncheckedUpdateWithoutCategoriesInput>
    create: XOR<SubjectCreateWithoutCategoriesInput, SubjectUncheckedCreateWithoutCategoriesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutCategoriesInput, SubjectUncheckedUpdateWithoutCategoriesInput>
  }

  export type SubjectUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutCategoriesInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TheoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TheoryWhereUniqueInput
    update: XOR<TheoryUpdateWithoutCategoryInput, TheoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<TheoryCreateWithoutCategoryInput, TheoryUncheckedCreateWithoutCategoryInput>
  }

  export type TheoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TheoryWhereUniqueInput
    data: XOR<TheoryUpdateWithoutCategoryInput, TheoryUncheckedUpdateWithoutCategoryInput>
  }

  export type TheoryUpdateManyWithWhereWithoutCategoryInput = {
    where: TheoryScalarWhereInput
    data: XOR<TheoryUpdateManyMutationInput, TheoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TheoryScalarWhereInput = {
    AND?: TheoryScalarWhereInput | TheoryScalarWhereInput[]
    OR?: TheoryScalarWhereInput[]
    NOT?: TheoryScalarWhereInput | TheoryScalarWhereInput[]
    theory_id?: IntFilter<"Theory"> | number
    title?: StringFilter<"Theory"> | string
    content?: StringFilter<"Theory"> | string
    pdf_files?: StringNullableFilter<"Theory"> | string | null
    created_at?: DateTimeFilter<"Theory"> | Date | string
    category_id?: IntFilter<"Theory"> | number
    parent_id?: IntNullableFilter<"Theory"> | number | null
  }

  export type QuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
  }

  export type QuizUpdateManyWithWhereWithoutCategoryInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FlashcardUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FlashcardWhereUniqueInput
    update: XOR<FlashcardUpdateWithoutCategoryInput, FlashcardUncheckedUpdateWithoutCategoryInput>
    create: XOR<FlashcardCreateWithoutCategoryInput, FlashcardUncheckedCreateWithoutCategoryInput>
  }

  export type FlashcardUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FlashcardWhereUniqueInput
    data: XOR<FlashcardUpdateWithoutCategoryInput, FlashcardUncheckedUpdateWithoutCategoryInput>
  }

  export type FlashcardUpdateManyWithWhereWithoutCategoryInput = {
    where: FlashcardScalarWhereInput
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutTheoriesInput = {
    name: string
    subject: SubjectCreateNestedOneWithoutCategoriesInput
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTheoriesInput = {
    category_id?: number
    name: string
    subject_id: number
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTheoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTheoriesInput, CategoryUncheckedCreateWithoutTheoriesInput>
  }

  export type TheoryCreateWithoutSubTheoriesInput = {
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category: CategoryCreateNestedOneWithoutTheoriesInput
    parent?: TheoryCreateNestedOneWithoutSubTheoriesInput
  }

  export type TheoryUncheckedCreateWithoutSubTheoriesInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category_id: number
    parent_id?: number | null
  }

  export type TheoryCreateOrConnectWithoutSubTheoriesInput = {
    where: TheoryWhereUniqueInput
    create: XOR<TheoryCreateWithoutSubTheoriesInput, TheoryUncheckedCreateWithoutSubTheoriesInput>
  }

  export type TheoryCreateWithoutParentInput = {
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category: CategoryCreateNestedOneWithoutTheoriesInput
    subTheories?: TheoryCreateNestedManyWithoutParentInput
  }

  export type TheoryUncheckedCreateWithoutParentInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category_id: number
    subTheories?: TheoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type TheoryCreateOrConnectWithoutParentInput = {
    where: TheoryWhereUniqueInput
    create: XOR<TheoryCreateWithoutParentInput, TheoryUncheckedCreateWithoutParentInput>
  }

  export type TheoryCreateManyParentInputEnvelope = {
    data: TheoryCreateManyParentInput | TheoryCreateManyParentInput[]
  }

  export type CategoryUpsertWithoutTheoriesInput = {
    update: XOR<CategoryUpdateWithoutTheoriesInput, CategoryUncheckedUpdateWithoutTheoriesInput>
    create: XOR<CategoryCreateWithoutTheoriesInput, CategoryUncheckedCreateWithoutTheoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTheoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTheoriesInput, CategoryUncheckedUpdateWithoutTheoriesInput>
  }

  export type CategoryUpdateWithoutTheoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCategoriesNestedInput
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTheoriesInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_id?: IntFieldUpdateOperationsInput | number
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TheoryUpsertWithoutSubTheoriesInput = {
    update: XOR<TheoryUpdateWithoutSubTheoriesInput, TheoryUncheckedUpdateWithoutSubTheoriesInput>
    create: XOR<TheoryCreateWithoutSubTheoriesInput, TheoryUncheckedCreateWithoutSubTheoriesInput>
    where?: TheoryWhereInput
  }

  export type TheoryUpdateToOneWithWhereWithoutSubTheoriesInput = {
    where?: TheoryWhereInput
    data: XOR<TheoryUpdateWithoutSubTheoriesInput, TheoryUncheckedUpdateWithoutSubTheoriesInput>
  }

  export type TheoryUpdateWithoutSubTheoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTheoriesNestedInput
    parent?: TheoryUpdateOneWithoutSubTheoriesNestedInput
  }

  export type TheoryUncheckedUpdateWithoutSubTheoriesInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TheoryUpsertWithWhereUniqueWithoutParentInput = {
    where: TheoryWhereUniqueInput
    update: XOR<TheoryUpdateWithoutParentInput, TheoryUncheckedUpdateWithoutParentInput>
    create: XOR<TheoryCreateWithoutParentInput, TheoryUncheckedCreateWithoutParentInput>
  }

  export type TheoryUpdateWithWhereUniqueWithoutParentInput = {
    where: TheoryWhereUniqueInput
    data: XOR<TheoryUpdateWithoutParentInput, TheoryUncheckedUpdateWithoutParentInput>
  }

  export type TheoryUpdateManyWithWhereWithoutParentInput = {
    where: TheoryScalarWhereInput
    data: XOR<TheoryUpdateManyMutationInput, TheoryUncheckedUpdateManyWithoutParentInput>
  }

  export type SubjectCreateWithoutQuizzesInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutQuizzesInput = {
    subject_id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutQuizzesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutQuizzesInput, SubjectUncheckedCreateWithoutQuizzesInput>
  }

  export type CategoryCreateWithoutQuizzesInput = {
    name: string
    subject: SubjectCreateNestedOneWithoutCategoriesInput
    theories?: TheoryCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutQuizzesInput = {
    category_id?: number
    name: string
    subject_id: number
    theories?: TheoryUncheckedCreateNestedManyWithoutCategoryInput
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutQuizzesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
    options?: OptionCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    question_id?: number
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
  }

  export type QuizAttemptCreateWithoutQuizInput = {
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    answers?: AnswerCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUncheckedCreateWithoutQuizInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptCreateOrConnectWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptCreateManyQuizInputEnvelope = {
    data: QuizAttemptCreateManyQuizInput | QuizAttemptCreateManyQuizInput[]
  }

  export type SubjectUpsertWithoutQuizzesInput = {
    update: XOR<SubjectUpdateWithoutQuizzesInput, SubjectUncheckedUpdateWithoutQuizzesInput>
    create: XOR<SubjectCreateWithoutQuizzesInput, SubjectUncheckedCreateWithoutQuizzesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutQuizzesInput, SubjectUncheckedUpdateWithoutQuizzesInput>
  }

  export type SubjectUpdateWithoutQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutQuizzesInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type CategoryUpsertWithoutQuizzesInput = {
    update: XOR<CategoryUpdateWithoutQuizzesInput, CategoryUncheckedUpdateWithoutQuizzesInput>
    create: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutQuizzesInput, CategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type CategoryUpdateWithoutQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCategoriesNestedInput
    theories?: TheoryUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutQuizzesInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_id?: IntFieldUpdateOperationsInput | number
    theories?: TheoryUncheckedUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    question_id?: IntFilter<"Question"> | number
    content?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    quiz_id?: IntFilter<"Question"> | number
    image_url?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutQuizInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject: SubjectCreateNestedOneWithoutQuizzesInput
    category: CategoryCreateNestedOneWithoutQuizzesInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject_id: number
    category_id: number
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type OptionCreateWithoutQuestionInput = {
    text: string
    is_correct: boolean
    answers?: AnswerCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutQuestionInput = {
    option_id?: number
    text: string
    is_correct: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionCreateManyQuestionInputEnvelope = {
    data: OptionCreateManyQuestionInput | OptionCreateManyQuestionInput[]
  }

  export type AnswerCreateWithoutQuestionInput = {
    response_text?: string | null
    option?: OptionCreateNestedOneWithoutAnswersInput
    quizAttempt: QuizAttemptCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    answer_id?: number
    response_text?: string | null
    option_id?: number | null
    qa_id: number
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
  }

  export type MatchingPairCreateWithoutQuestionInput = {
    left: string
    right: string
  }

  export type MatchingPairUncheckedCreateWithoutQuestionInput = {
    pair_id?: number
    left: string
    right: string
  }

  export type MatchingPairCreateOrConnectWithoutQuestionInput = {
    where: MatchingPairWhereUniqueInput
    create: XOR<MatchingPairCreateWithoutQuestionInput, MatchingPairUncheckedCreateWithoutQuestionInput>
  }

  export type MatchingPairCreateManyQuestionInputEnvelope = {
    data: MatchingPairCreateManyQuestionInput | MatchingPairCreateManyQuestionInput[]
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject?: SubjectUpdateOneRequiredWithoutQuizzesNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizzesNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type OptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuestionInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    option_id?: IntFilter<"Option"> | number
    text?: StringFilter<"Option"> | string
    is_correct?: BoolFilter<"Option"> | boolean
    question_id?: IntFilter<"Option"> | number
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    answer_id?: IntFilter<"Answer"> | number
    response_text?: StringNullableFilter<"Answer"> | string | null
    option_id?: IntNullableFilter<"Answer"> | number | null
    question_id?: IntFilter<"Answer"> | number
    qa_id?: IntFilter<"Answer"> | number
  }

  export type MatchingPairUpsertWithWhereUniqueWithoutQuestionInput = {
    where: MatchingPairWhereUniqueInput
    update: XOR<MatchingPairUpdateWithoutQuestionInput, MatchingPairUncheckedUpdateWithoutQuestionInput>
    create: XOR<MatchingPairCreateWithoutQuestionInput, MatchingPairUncheckedCreateWithoutQuestionInput>
  }

  export type MatchingPairUpdateWithWhereUniqueWithoutQuestionInput = {
    where: MatchingPairWhereUniqueInput
    data: XOR<MatchingPairUpdateWithoutQuestionInput, MatchingPairUncheckedUpdateWithoutQuestionInput>
  }

  export type MatchingPairUpdateManyWithWhereWithoutQuestionInput = {
    where: MatchingPairScalarWhereInput
    data: XOR<MatchingPairUpdateManyMutationInput, MatchingPairUncheckedUpdateManyWithoutQuestionInput>
  }

  export type MatchingPairScalarWhereInput = {
    AND?: MatchingPairScalarWhereInput | MatchingPairScalarWhereInput[]
    OR?: MatchingPairScalarWhereInput[]
    NOT?: MatchingPairScalarWhereInput | MatchingPairScalarWhereInput[]
    pair_id?: IntFilter<"MatchingPair"> | number
    left?: StringFilter<"MatchingPair"> | string
    right?: StringFilter<"MatchingPair"> | string
    question_id?: IntFilter<"MatchingPair"> | number
  }

  export type QuestionCreateWithoutOptionsInput = {
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    question_id?: number
    content: string
    type: string
    quiz_id: number
    image_url?: string | null
    explanation?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type AnswerCreateWithoutOptionInput = {
    response_text?: string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    quizAttempt: QuizAttemptCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutOptionInput = {
    answer_id?: number
    response_text?: string | null
    question_id: number
    qa_id: number
  }

  export type AnswerCreateOrConnectWithoutOptionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput>
  }

  export type AnswerCreateManyOptionInputEnvelope = {
    data: AnswerCreateManyOptionInput | AnswerCreateManyOptionInput[]
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutOptionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutOptionInput, AnswerUncheckedUpdateWithoutOptionInput>
    create: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutOptionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutOptionInput, AnswerUncheckedUpdateWithoutOptionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutOptionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutOptionInput>
  }

  export type QuestionCreateWithoutPairsInput = {
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutPairsInput = {
    question_id?: number
    content: string
    type: string
    quiz_id: number
    image_url?: string | null
    explanation?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutPairsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutPairsInput, QuestionUncheckedCreateWithoutPairsInput>
  }

  export type QuestionUpsertWithoutPairsInput = {
    update: XOR<QuestionUpdateWithoutPairsInput, QuestionUncheckedUpdateWithoutPairsInput>
    create: XOR<QuestionCreateWithoutPairsInput, QuestionUncheckedCreateWithoutPairsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutPairsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutPairsInput, QuestionUncheckedUpdateWithoutPairsInput>
  }

  export type QuestionUpdateWithoutPairsInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutPairsInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutQuizAttemptsInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
    flashcards?: FlashcardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizAttemptsInput = {
    user_id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type QuizCreateWithoutQuizAttemptsInput = {
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject: SubjectCreateNestedOneWithoutQuizzesInput
    category: CategoryCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuizAttemptsInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject_id: number
    category_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuizAttemptsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuizAttemptsInput, QuizUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type AnswerCreateWithoutQuizAttemptInput = {
    response_text?: string | null
    option?: OptionCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuizAttemptInput = {
    answer_id?: number
    response_text?: string | null
    option_id?: number | null
    question_id: number
  }

  export type AnswerCreateOrConnectWithoutQuizAttemptInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuizAttemptInput, AnswerUncheckedCreateWithoutQuizAttemptInput>
  }

  export type AnswerCreateManyQuizAttemptInputEnvelope = {
    data: AnswerCreateManyQuizAttemptInput | AnswerCreateManyQuizAttemptInput[]
  }

  export type UserUpsertWithoutQuizAttemptsInput = {
    update: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserUpdateWithoutQuizAttemptsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    flashcards?: FlashcardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizAttemptsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    flashcards?: FlashcardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutQuizAttemptsInput = {
    update: XOR<QuizUpdateWithoutQuizAttemptsInput, QuizUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<QuizCreateWithoutQuizAttemptsInput, QuizUncheckedCreateWithoutQuizAttemptsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuizAttemptsInput, QuizUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type QuizUpdateWithoutQuizAttemptsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject?: SubjectUpdateOneRequiredWithoutQuizzesNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuizAttemptsInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuizAttemptInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuizAttemptInput, AnswerUncheckedUpdateWithoutQuizAttemptInput>
    create: XOR<AnswerCreateWithoutQuizAttemptInput, AnswerUncheckedCreateWithoutQuizAttemptInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuizAttemptInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuizAttemptInput, AnswerUncheckedUpdateWithoutQuizAttemptInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuizAttemptInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuizAttemptInput>
  }

  export type OptionCreateWithoutAnswersInput = {
    text: string
    is_correct: boolean
    question: QuestionCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutAnswersInput = {
    option_id?: number
    text: string
    is_correct: boolean
    question_id: number
  }

  export type OptionCreateOrConnectWithoutAnswersInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    question_id?: number
    content: string
    type: string
    quiz_id: number
    image_url?: string | null
    explanation?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    pairs?: MatchingPairUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuizAttemptCreateWithoutAnswersInput = {
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    quiz: QuizCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutAnswersInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user_id: number
    quiz_id: number
  }

  export type QuizAttemptCreateOrConnectWithoutAnswersInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutAnswersInput, QuizAttemptUncheckedCreateWithoutAnswersInput>
  }

  export type OptionUpsertWithoutAnswersInput = {
    update: XOR<OptionUpdateWithoutAnswersInput, OptionUncheckedUpdateWithoutAnswersInput>
    create: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutAnswersInput, OptionUncheckedUpdateWithoutAnswersInput>
  }

  export type OptionUpdateWithoutAnswersInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutAnswersInput = {
    option_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizAttemptUpsertWithoutAnswersInput = {
    update: XOR<QuizAttemptUpdateWithoutAnswersInput, QuizAttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuizAttemptCreateWithoutAnswersInput, QuizAttemptUncheckedCreateWithoutAnswersInput>
    where?: QuizAttemptWhereInput
  }

  export type QuizAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuizAttemptWhereInput
    data: XOR<QuizAttemptUpdateWithoutAnswersInput, QuizAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizAttemptUpdateWithoutAnswersInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutAnswersInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user_id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateWithoutFlashcardsInput = {
    name: string
    subject: SubjectCreateNestedOneWithoutCategoriesInput
    theories?: TheoryCreateNestedManyWithoutCategoryInput
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFlashcardsInput = {
    category_id?: number
    name: string
    subject_id: number
    theories?: TheoryUncheckedCreateNestedManyWithoutCategoryInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFlashcardsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFlashcardsInput, CategoryUncheckedCreateWithoutFlashcardsInput>
  }

  export type UserCreateWithoutFlashcardsInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlashcardsInput = {
    user_id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    role?: $Enums.Role
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlashcardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
  }

  export type CategoryUpsertWithoutFlashcardsInput = {
    update: XOR<CategoryUpdateWithoutFlashcardsInput, CategoryUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<CategoryCreateWithoutFlashcardsInput, CategoryUncheckedCreateWithoutFlashcardsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFlashcardsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFlashcardsInput, CategoryUncheckedUpdateWithoutFlashcardsInput>
  }

  export type CategoryUpdateWithoutFlashcardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCategoriesNestedInput
    theories?: TheoryUpdateManyWithoutCategoryNestedInput
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFlashcardsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_id?: IntFieldUpdateOperationsInput | number
    theories?: TheoryUncheckedUpdateManyWithoutCategoryNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutFlashcardsInput = {
    update: XOR<UserUpdateWithoutFlashcardsInput, UserUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlashcardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlashcardsInput, UserUncheckedUpdateWithoutFlashcardsInput>
  }

  export type UserUpdateWithoutFlashcardsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlashcardsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizAttemptCreateManyUserInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    quiz_id: number
  }

  export type FlashcardCreateManyUserInput = {
    flashcard_id?: number
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    category_id: number
  }

  export type QuizAttemptUpdateWithoutUserInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    quiz?: QuizUpdateOneRequiredWithoutQuizAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    quiz_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    quiz_id?: IntFieldUpdateOperationsInput | number
  }

  export type FlashcardUpdateWithoutUserInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutFlashcardsNestedInput
  }

  export type FlashcardUncheckedUpdateWithoutUserInput = {
    flashcard_id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type FlashcardUncheckedUpdateManyWithoutUserInput = {
    flashcard_id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuizCreateManySubjectInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: number
  }

  export type CategoryCreateManySubjectInput = {
    category_id?: number
    name: string
  }

  export type QuizUpdateWithoutSubjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutSubjectInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutSubjectInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutSubjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    theories?: TheoryUpdateManyWithoutCategoryNestedInput
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubjectInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    theories?: TheoryUncheckedUpdateManyWithoutCategoryNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    flashcards?: FlashcardUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutSubjectInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TheoryCreateManyCategoryInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    parent_id?: number | null
  }

  export type QuizCreateManyCategoryInput = {
    quiz_id?: number
    title: string
    description?: string | null
    difficulty?: $Enums.Difficulty | null
    time_limit?: number | null
    is_exam_mode?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    subject_id: number
  }

  export type FlashcardCreateManyCategoryInput = {
    flashcard_id?: number
    front: string
    back: string
    difficulty?: $Enums.FlashcardDifficulty
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type TheoryUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TheoryUpdateOneWithoutSubTheoriesNestedInput
    subTheories?: TheoryUpdateManyWithoutParentNestedInput
  }

  export type TheoryUncheckedUpdateWithoutCategoryInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    subTheories?: TheoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TheoryUncheckedUpdateManyWithoutCategoryInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuizUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject?: SubjectUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCategoryInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCategoryInput = {
    quiz_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    time_limit?: NullableIntFieldUpdateOperationsInput | number | null
    is_exam_mode?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type FlashcardUpdateWithoutCategoryInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlashcardsNestedInput
  }

  export type FlashcardUncheckedUpdateWithoutCategoryInput = {
    flashcard_id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FlashcardUncheckedUpdateManyWithoutCategoryInput = {
    flashcard_id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumFlashcardDifficultyFieldUpdateOperationsInput | $Enums.FlashcardDifficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TheoryCreateManyParentInput = {
    theory_id?: number
    title: string
    content: string
    pdf_files?: string | null
    created_at?: Date | string
    category_id: number
  }

  export type TheoryUpdateWithoutParentInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTheoriesNestedInput
    subTheories?: TheoryUpdateManyWithoutParentNestedInput
  }

  export type TheoryUncheckedUpdateWithoutParentInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
    subTheories?: TheoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TheoryUncheckedUpdateManyWithoutParentInput = {
    theory_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdf_files?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateManyQuizInput = {
    question_id?: number
    content: string
    type: string
    image_url?: string | null
    explanation?: string | null
  }

  export type QuizAttemptCreateManyQuizInput = {
    qa_id?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    score?: number | null
    total_questions?: number | null
    time_spent?: number | null
    status?: $Enums.QuizStatus
    user_id: number
  }

  export type QuestionUpdateWithoutQuizInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    pairs?: MatchingPairUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizAttemptUpdateWithoutQuizInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutQuizInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizInput = {
    qa_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    total_questions?: NullableIntFieldUpdateOperationsInput | number | null
    time_spent?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type OptionCreateManyQuestionInput = {
    option_id?: number
    text: string
    is_correct: boolean
  }

  export type AnswerCreateManyQuestionInput = {
    answer_id?: number
    response_text?: string | null
    option_id?: number | null
    qa_id: number
  }

  export type MatchingPairCreateManyQuestionInput = {
    pair_id?: number
    left: string
    right: string
  }

  export type OptionUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutQuestionInput = {
    option_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutQuestionInput = {
    option_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUpdateWithoutQuestionInput = {
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option?: OptionUpdateOneWithoutAnswersNestedInput
    quizAttempt?: QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option_id?: NullableIntFieldUpdateOperationsInput | number | null
    qa_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option_id?: NullableIntFieldUpdateOperationsInput | number | null
    qa_id?: IntFieldUpdateOperationsInput | number
  }

  export type MatchingPairUpdateWithoutQuestionInput = {
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
  }

  export type MatchingPairUncheckedUpdateWithoutQuestionInput = {
    pair_id?: IntFieldUpdateOperationsInput | number
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
  }

  export type MatchingPairUncheckedUpdateManyWithoutQuestionInput = {
    pair_id?: IntFieldUpdateOperationsInput | number
    left?: StringFieldUpdateOperationsInput | string
    right?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyOptionInput = {
    answer_id?: number
    response_text?: string | null
    question_id: number
    qa_id: number
  }

  export type AnswerUpdateWithoutOptionInput = {
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    quizAttempt?: QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutOptionInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    qa_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyWithoutOptionInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    qa_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyQuizAttemptInput = {
    answer_id?: number
    response_text?: string | null
    option_id?: number | null
    question_id: number
  }

  export type AnswerUpdateWithoutQuizAttemptInput = {
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option?: OptionUpdateOneWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuizAttemptInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyWithoutQuizAttemptInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    response_text?: NullableStringFieldUpdateOperationsInput | string | null
    option_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: IntFieldUpdateOperationsInput | number
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