import type { MenuBarCanvasProps } from '@tryvienna/sdk';

export function ProfileMenuBarContent(_props: MenuBarCanvasProps) {
  return (
    <div className="flex flex-col gap-2" style={{ minWidth: 240 }}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">📊</span>
        <div>
          <div className="text-sm font-semibold">Data Engineer / Scientist</div>
          <div className="text-xs text-muted-foreground">
            Tools for data pipelines and analysis
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-1.5 text-[10px] text-muted-foreground">
        Profile: <span className="font-medium text-foreground">profile-data-engineer</span>
      </div>
    </div>
  );
}
