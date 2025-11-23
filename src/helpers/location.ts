import qs from 'query-string';

interface ValidParams {
  user: string;
  branch: string;
  mode: string;
  template: string;
  lang: string;
}

const defaultValidParams: ValidParams = {
  user: 'ssddi456',
  branch: 'master',
  mode: 'edit',
  template: 'template1',
  lang: 'zh-CN',
};

export function getSearchObj(): ValidParams {
  const search = typeof window !== 'undefined' && window.location.search;
  const query = qs.parse(search);

  return {
    ...defaultValidParams,
    ...query,
  };
}
