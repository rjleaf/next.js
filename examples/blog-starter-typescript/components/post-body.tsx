import markdownStyles from './markdown-styles.module.css'
import LoginForm from './login-form'

type Props = {
  content: string
  premium: string
  isLoggedIn: boolean
}

const PostBody = ({ content, premium, isLoggedIn }: Props) => {
  if (premium && !isLoggedIn) return <LoginForm />
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
