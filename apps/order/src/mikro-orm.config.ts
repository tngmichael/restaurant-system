import { defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

// import { MySqlDriver } from '@mikro-orm/mysql';

export default defineConfig({
  // driver: MySqlDriver,
  extensions: [Migrator, SeedManager],
});
