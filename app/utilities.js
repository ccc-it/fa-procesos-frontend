const allAvatars = (ctx => {
  const keys = ctx.keys()
  return keys.map(ctx)
})(require.context('./images/avatars', true, /.*/))

export function randomArray (arr) {
  const index = 0// Math.round(Math.random() * (arr.length - 1))
  return arr[index]
}

export function randomAvatar () {
  return randomArray(allAvatars)
}

export const getCurrentUser = () => ({
  firstName: 'Massimo',
  lastName: 'Mazzone',
  jobTitle: 'Fundador'
})
