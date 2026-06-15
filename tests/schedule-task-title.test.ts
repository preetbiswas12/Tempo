import { describe, expect, it } from 'vitest';
import {
  buildScheduledTaskFallbackTitle,
  buildScheduledTaskTitle,
  summarizeSchedulePrompt,
} from '../src/shared/schedule/task-title';

describe('scheduled task title', () => {
  it('always prefixes with [Scheduled Task]', () => {
    expect(buildScheduledTaskTitle('Help me organize today\'s todos')).toBe('[Scheduled Task] Help me organize today\'s todos');
  });

  it('normalizes whitespace and line breaks', () => {
    expect(buildScheduledTaskTitle('  Line one\n\nLine two   Line three  ')).toBe('[Scheduled Task] Line one Line two Line three');
  });

  it('strips duplicated schedule prefix', () => {
    expect(buildScheduledTaskTitle('[Scheduled Task] Daily summary')).toBe('[Scheduled Task] Daily summary');
  });

  it('truncates very long prompt summary', () => {
    const longPrompt = 'a'.repeat(70);
    expect(summarizeSchedulePrompt(longPrompt)).toBe(`${'a'.repeat(45)}...`);
  });

  it('falls back for empty prompt', () => {
    expect(buildScheduledTaskTitle('   ')).toBe('[Scheduled Task] Untitled Task');
  });

  it('builds fallback title from prompt summary', () => {
    expect(buildScheduledTaskFallbackTitle('Please help me find Agent papers from the past week')).toBe(
      '[Scheduled Task] Please help me find Agent papers from the past week'
    );
  });
});
