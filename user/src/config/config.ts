export const config = {
  dev: {
    username: process.env.UDAGRAM_DBUSERNAME,
    password: process.env.UDAGRAM_DBPASSWORD,
    database: process.env.UDAGRAM_DBNAME,
    host: process.env.UDAGRAM_DBHOST,
    dialect: process.env.UDAGRAM_ORMDIALECT,
    aws_reigion: process.env.UDAGRAM_AWS_REGION,
    aws_profile: process.env.UDAGRAM_AWS_PROFILE,
    aws_media_bucket: process.env.UDAGRAM_S3_MEDIABUCKET
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres'
  },
  jwt: {
    secret: process.env.UDAGRAM_JWT_SECRET
  },
  cors_url: process.env.UDAGRAM_FRONTEND_URL
}