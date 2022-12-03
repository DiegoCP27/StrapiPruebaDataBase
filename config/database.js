module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '216.246.46.82'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'qaolnfcq_ecreea_strapi'),
      user: env('DATABASE_USERNAME', 'qaolnfcq_ecreea_ti'),
      password: env('DATABASE_PASSWORD', 'OS;)kaLL-ghG'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
