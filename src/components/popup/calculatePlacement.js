export default function (triggerRect, popupRect, screenWidth, screenHeight, originalPosition) {
  const offset = 14; // 10px for arrow 4px for spacing
  const borderSize = 2; // need to include border for corner calculations
  const triggerCenterY = triggerRect.top + (triggerRect.height / 2);
  const triggerCenterX = triggerRect.left + (triggerRect.width / 2);

  let pos;
  let corner;

  const dirs = {
    top: triggerRect.top - popupRect.height - offset,
    bottom: screenHeight - triggerRect.bottom - popupRect.height - offset,
    left: triggerRect.left - popupRect.width - offset,
    right: screenWidth - triggerRect.right - popupRect.width - offset,
  };

  const corners = {
    left: triggerCenterX - (popupRect.width / 2) - borderSize <= 0,
    right: triggerCenterX + (popupRect.width / 2) + borderSize >= screenWidth,
    top: triggerCenterY - (popupRect.height / 2) - borderSize <= 0,
    bottom: triggerCenterY + (popupRect.height / 2) + borderSize >= screenHeight,
  };

  const invert = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  };

  const inverse = invert[originalPosition];
  const validDirs = Object.keys(dirs).filter((dir) => dirs[dir] > 0);
  const sortedDirs = Object.keys(dirs).sort((a, b) => {
    if (dirs[a] > dirs[b]) {
      return -1;
    } if (dirs[a] < dirs[b]) {
      return 1;
    }
    return 0;
  });

  if (dirs[originalPosition] > 0) {
    // selected position is valid, or no positions are valid
    pos = originalPosition;
  } else if (dirs[inverse] > 0) {
    // inverted position is valid
    pos = inverse;
  } else if (validDirs.length) {
    // try the angles
    [pos] = validDirs;
  } else {
    // use whichever direction has the most space
    [pos] = sortedDirs;
  }

  if (pos === 'bottom' || pos === 'top') {
    if (corners.left) {
      corner = 'left';
    } else if (corners.right) {
      corner = 'right';
    }
  } else if (corners.top) {
    corner = 'top';
  } else if (corners.bottom) {
    corner = 'bottom';
  }

  return {
    pos, corner,
  };
}
