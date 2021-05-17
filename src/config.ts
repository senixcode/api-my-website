export const config = async () => ({
  database: {
    type: 'mongodb',
    url: process.env.MONGO_URI,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    logging: false,
  },
});
