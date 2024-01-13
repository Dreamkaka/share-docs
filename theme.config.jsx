import { useRouter } from 'next/router'

export default {
    logo: <span>晓寒的资源分享站</span>,
    project: {
      link: 'https://github.com/Dreamkaka/share-docs'
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
          return {
            titleTemplate: '%s – 晓寒重工'
          }
        }
      },
    // ... other theme options
  toc: {
    backToTop: true
  },
  footer: {
    text: (
      <span>
         {new Date().getFullYear()} ©{' '}
        <a href="https://xiaohan.xfcloud.org" target="_blank">
          幻梦晓寒kaka
        </a>
        .
      </span>
    )
  },
  sidebar: {
    toggleButton: true
  },
  banner: {
    dismissible: false,
    text: "试运行阶段，后续可能会有调整，以实际为准"
  }
}