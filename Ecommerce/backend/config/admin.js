module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77e2a8038eaddc69213271e4d31797dd'),
  },
});
