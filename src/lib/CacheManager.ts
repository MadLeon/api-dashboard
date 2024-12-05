// Implementing Singleton Pattern (Creational Pattern)

// Cache manager for caching data
// There is only one instance of the cache manager
// The cache manager is used to cache data for a certain amount of time
export class CacheManager<T> {
  private static instance: CacheManager<unknown>;
  private cache: Map<string, { data: T; expiry: number }>;

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.cache = new Map();
  }

  // Public method to get the instance of the cache manager
  public static getInstance<T>(): CacheManager<T> {
    if (!CacheManager.instance) {
      // If the instance does not exist, create a new instance
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance as CacheManager<T>;
  }

  // Public method to set the data in the cache
  public set(key: string, data: T, expiry: number) {
    const expiryTime = Date.now() + expiry;
    // Set the data in the cache with the expiry time
    this.cache.set(key, { data, expiry: expiryTime });
  }

  // Public method to get the data from the cache
  public get(key: string): T | null {
    const cached = this.cache.get(key);
    // Check if the data is in the cache and if it is not expired
    if (cached && cached.expiry > Date.now()) {
      return cached.data;
    }
    // If the data is expired, delete the data from the cache
    this.cache.delete(key);
    return null;
  }
}
