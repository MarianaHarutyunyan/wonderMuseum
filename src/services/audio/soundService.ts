import { Audio, type AVPlaybackSource } from 'expo-av';

class SoundService {
  private soundsBySource = new Map<AVPlaybackSource, Audio.Sound>();

  async play(source: AVPlaybackSource): Promise<void> {
    let sound = this.soundsBySource.get(source);

    if (!sound) {
      const created = await Audio.Sound.createAsync(source);
      sound = created.sound;
      this.soundsBySource.set(source, sound);
    }

    await sound.replayAsync();
  }

  async unloadAll(): Promise<void> {
    await Promise.all(
      Array.from(this.soundsBySource.values()).map((sound) => sound.unloadAsync()),
    );
    this.soundsBySource.clear();
  }
}

export const soundService = new SoundService();
