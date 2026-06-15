import { describe, it, expect } from 'vitest';
import { splitTextByFileMentions, getFileLinkButtonClassName, splitChildrenByFileMentions } from '../src/renderer/utils/file-link';

describe('splitTextByFileMentions', () => {
  it('detects bare filenames with extension', () => {
    const input = 'Open sample-document.txt to view';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      { type: 'text', value: 'Open ' },
      { type: 'file', value: 'sample-document.txt' },
      { type: 'text', value: ' to view' },
    ]);
  });

  it('detects filenames with Unicode characters at the start of a line', () => {
    const input = 'simple-sales-report.xlsx - Generated Excel file';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      { type: 'file', value: 'simple-sales-report.xlsx' },
      { type: 'text', value: ' - Generated Excel file' },
    ]);
  });

  it('detects absolute paths', () => {
    const input = 'Path /Users/haoqing/test/report.docx generated';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      { type: 'text', value: 'Path ' },
      { type: 'file', value: '/Users/haoqing/test/report.docx' },
      { type: 'text', value: ' generated' },
    ]);
  });

  it('detects absolute paths with spaces', () => {
    const input = 'Document saved to: /Users/haoqing/Library/Application Support/open-cowork/default_working_dir/word-document/sample-document.docx';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      { type: 'text', value: 'Document saved to: ' },
      { type: 'file', value: '/Users/haoqing/Library/Application Support/open-cowork/default_working_dir/word-document/sample-document.docx' },
    ]);
  });

  it('detects Windows absolute paths that use forward slashes', () => {
    const input = 'Saved to C:/Users/demo/Documents/report.txt successfully';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      { type: 'text', value: 'Saved to ' },
      { type: 'file', value: 'C:/Users/demo/Documents/report.txt' },
      { type: 'text', value: ' successfully' },
    ]);
  });

  it('detects UNC network share paths', () => {
    const input = 'Saved to \\\\server\\share\\reports\\summary.docx successfully';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      { type: 'text', value: 'Saved to ' },
      { type: 'file', value: '\\\\server\\share\\reports\\summary.docx' },
      { type: 'text', value: ' successfully' },
    ]);
  });

  it('detects bare filename after descriptive paragraph', () => {
    const input = [
      'Word document created with content “Beijing Weather Forecast for the Next Month” (including trends, temperature, precipitation, wind, lifestyle advice, etc.):',
      '',
      'Beijing-Weather-Forecast.docx',
    ].join('\n');
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([
      {
        type: 'text',
        value: 'Word document created with content “Beijing Weather Forecast for the Next Month” (including trends, temperature, precipitation, wind, lifestyle advice, etc.):\n\n',
      },
      { type: 'file', value: 'Beijing-Weather-Forecast.docx' },
    ]);
  });

  it('ignores urls', () => {
    const input = 'View https://example.com/demo.txt';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([{ type: 'text', value: input }]);
  });

  it('ignores file URLs instead of turning them into broken file buttons', () => {
    const input = 'View file:///C:/Users/demo/report.txt';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([{ type: 'text', value: input }]);
  });

  it('ignores UNC file URLs instead of splitting out the trailing filename', () => {
    const input = 'View file://server/share/report.txt';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([{ type: 'text', value: input }]);
  });

  it('does not treat numeric dimensions as filenames', () => {
    const input = 'HTML dimensions should be 10.0" × 5.6" (16:9 ratio).';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([{ type: 'text', value: input }]);
  });

  it('ignores filenames embedded in Chinese sentences without boundaries', () => {
    const input = 'I see there is already a slide1.html file. Let me create the other slide files. First create slide2.html:';
    const parts = splitTextByFileMentions(input);
    expect(parts).toEqual([{ type: 'text', value: input }]);
  });

  it('provides a left-aligned file link button class', () => {
    const className = getFileLinkButtonClassName();
    expect(className).toContain('text-left');
    expect(className).toContain('break-all');
  });

  it('splits string children into file and text parts', () => {
    const parts = splitChildrenByFileMentions(['simple.md - description']);
    expect(parts).toEqual([
      { type: 'file', value: 'simple.md' },
      { type: 'text', value: ' - description' },
    ]);
  });
});
