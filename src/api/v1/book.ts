import Router from 'koa-router'

const router = new Router()
router.get('/v1/classic/latest', async (ctx, next) => {
  ctx.body = {
    data: 'classic'
  }
})
// export default router
module.exports = router