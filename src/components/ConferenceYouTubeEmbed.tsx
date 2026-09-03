import { PlayCircleIcon } from "@heroicons/react/24/outline";
import type { ConferenceDayVideo } from "../constants/conferenceVideos";

export function ConferenceYouTubeEmbed({ video }: { video: ConferenceDayVideo }) {
  const poster = (
    <>
      <img
        src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
        alt=""
        onError={(event) => {
          event.currentTarget.src = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;
        }}
      />
      <span className="conference-youtube__play" aria-hidden>
        <PlayCircleIcon />
      </span>
    </>
  );

  return (
    <section className="conference-youtube" aria-label={`${video.title} recording`}>
      <div className="conference-youtube__intro">
        <p className="conference-youtube__eyebrow">YouTube live recording</p>
        <h3 className="conference-youtube__title">
          <PlayCircleIcon className="conference-youtube__icon" aria-hidden />
          {video.title}
        </h3>
      </div>
      <div className="conference-youtube__frame">
        {video.embedOnSite ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <a
            className="conference-youtube__poster"
            href={video.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${video.title} on YouTube`}
          >
            {poster}
          </a>
        )}
      </div>
      <a
        href={video.watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="conference-youtube__open"
      >
        Open on YouTube
      </a>
    </section>
  );
}
