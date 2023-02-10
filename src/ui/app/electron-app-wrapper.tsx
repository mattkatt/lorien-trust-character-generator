import React, { FC, useState } from 'react';
import {
    ChromeCloseIcon,
    ChromeMinimizeIcon,
    ChromeRestoreIcon,
    SquareShapeIcon,
} from '@fluentui/react-icons-mdl2';
import styles from './app.module.css';

export const ElectronAppWrapper: FC = ({ children }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    // @ts-ignore
    const electron = window.electron;

    if (!electron) {
        return <>{children}</>;
    }

    const { ipcRenderer } = electron;

    ipcRenderer.on('maximize', () => setIsMaximized(true));
    ipcRenderer.on('unmaximize', () => setIsMaximized(false));

    const onMinimize = () => ipcRenderer.send('window-minimize');
    const onMaximize = () => ipcRenderer.send('window-maximize');
    const onRestore = () => ipcRenderer.send('window-restore');
    const onClose = () => ipcRenderer.send('window-close');

    return (
        <div className={styles.app}>
            <div className={styles.appBar}>
                <div className={styles.title}>Lorien Trust Character Generator</div>

                <div className={styles.controls}>
                    <div className={styles.control} onClick={onMinimize}>
                        <ChromeMinimizeIcon />
                    </div>
                    {isMaximized ? (
                        <div className={styles.control} onClick={onRestore}>
                            <ChromeRestoreIcon />
                        </div>
                    ) : (
                        <div className={styles.control} onClick={onMaximize}>
                            <SquareShapeIcon />
                        </div>
                    )}

                    <div className={[styles.control, styles.close].join(' ')} onClick={onClose}>
                        <ChromeCloseIcon />
                    </div>
                </div>
            </div>
            <div className={styles.appContent}>{children}</div>
        </div>
    );
};
