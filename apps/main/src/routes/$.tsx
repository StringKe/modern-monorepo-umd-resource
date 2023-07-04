// eslint-disable-next-line filenames/match-regex
import { useModuleApps } from '@modern-js/plugin-garfish/runtime';

export default function DefaultRouters() {
  const { MApp } = useModuleApps();
  return (
    <div>
      <div>Main Content</div>
      <MApp />
    </div>
  );
}
