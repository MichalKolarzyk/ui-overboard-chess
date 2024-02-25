export interface FindMeetingsResponse{
    meetingId: string;
    userOwnerId: string,
    userOwnerName: string,
    meetingTitle: string,
    meetingStartDate: string,
}

export interface GetMeetingResponse{
    id: string,
    canJoin: boolean,
    canEdit: boolean,
    canRemove: boolean,
    isOwner: boolean,
    isParticipant: boolean,
    durationHours: number,
    durationMinutes: number,
    start: Date,
    title: string,
    description: string
}