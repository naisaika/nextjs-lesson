declare module 'react-anchor-link-smooth-scroll' {
    import { AnchorHTMLAttributes } from 'react';
  
    interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
      to: string;
      onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
      offset?: number; // 追加のプロパティがあればここに追加
    }
  
    const AnchorLink: React.FC<AnchorLinkProps>;
    export default AnchorLink;
  }